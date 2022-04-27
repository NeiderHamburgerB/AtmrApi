import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { IUser } from '../user/interfaces/user.interface'
import { ProductCreateDto, ProductUpdateDto } from './dto/product.dto'
import { IProduct } from './interfaces/product.interface'

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private product:Model<IProduct>){}

    async create(data:ProductCreateDto, user:IUser): Promise<string>{
        
        data.createdBy = user._id

        try {
            
            let { acknowledged } = await this.product.updateOne(
                {name:data.name},
                {$set:data},
                {upsert:true}
            )

            if(acknowledged) return 'successful operation' 
            
        } catch (error) {
            return error
        }
       
    }

    async all(): Promise<IProduct[]>{
        return await this.product
                    .find()
                    .select('-createdAt -updatedAt')
                    .populate({path:'createdBy',select:{name:1, lastname:1, email:1, _id:0}})
    }

    async one(id:string): Promise<IProduct>{
        return await this.product
                    .findOne({_id:id})
                    .select('-createdAt -updatedAt')
                    .populate({path:'createdBy',select:{name:1, lastname:1, email:1, _id:0}})
    }

    async update(id:string, data:ProductUpdateDto):Promise<IProduct>{

        try {
            return await this.product
                .findByIdAndUpdate(id, data, {new:true})
                .select('-createdAt -updatedAt')
                    .populate({path:'createdBy',select:{name:1, lastname:1, email:1, _id:0}})
        } catch (error) {
            return error
        }
         
    }

    async delete(id:string):Promise<string>{
        try {
            await this.product.findByIdAndDelete(id)
            return 'Product deleted' 
        } catch (error) {
            return error
        }
    }


}
