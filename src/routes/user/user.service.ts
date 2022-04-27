import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { IUser, IUserSearch } from './interfaces/user.interface'
import { Model } from 'mongoose'
import { UserCreateDto, UserUpdateDto } from './dto/user.dto'
import { hashSync, genSaltSync } from 'bcryptjs'

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private user: Model<IUser>){}

    async create(data:UserCreateDto): Promise<string> {

        try {

            data.password = this.hash(data.password)
            
            let user = await this.user.exists({
                $or:[{email:data.email},{'document.value':data.document.value}]
            })
            
            if(user) throw new NotAcceptableException('User exists')
            
            let register = await this.user.create(data)
            
            if(register === null || register === undefined) throw new InternalServerErrorException('Imposible save user')
            
            await register.save()

            return 'User created'

        } catch (error) {
            return error.message
        }
    }

    async all(): Promise<IUser[]> {
        return this.user
            .find()
            .select('-createdAt -updatedAt')
            .lean()
    }

    async one(data:IUserSearch, watch:boolean): Promise<IUser>{
        return this.user
            .findOne(data)
            .select(`-createdAt -updatedAt ${watch ? '' : '-password'}`)
            .lean()
    }

    async update(id:string, data:UserUpdateDto):Promise<IUser>{
        try {
            return await this.user
                    .findByIdAndUpdate(id, data, {new:true})
                    .select(`-createdAt -updatedAt -password`)
            
        } catch (error) {
            return error
        }
    }

    hash = (password:string) => {
        return hashSync(password, genSaltSync(8))
    }


    async default(data:any) {
        let adminD = await this.user.exists({email:data.email})
        if(!adminD){
            try {
                data.password = this.hash(data.password)
                let register = await this.user.create(data)
                await register.save()
            } catch (error) {
                console.log(error)
            }
        }
    }

}

