import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ResourcesApp } from 'src/app.roles'
import { Auth } from 'src/config/decorators/auth.decorators'
import { User } from 'src/config/decorators/user.decorators'
import { IUser } from '../user/interfaces/user.interface'
import { ProductCreateDto, ProductUpdateDto } from './dto/product.dto'
import { ProductService } from './product.service'

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Auth({
        action:'create',
        possession:'any',
        resource:ResourcesApp.PRODUCT
    })
    @ApiOperation({summary:'Method for create product'})
    @Post('create')
    create(@User() user:IUser, @Body() data:ProductCreateDto){
        return this.productService.create(data, user)
    }

    @Auth({
        action:'read',
        possession:'any',
        resource:ResourcesApp.PRODUCT
    })
    @Get('all')
    @ApiOperation({summary:'Get all products'})
    all(){
        return this.productService.all()
    }

    @Auth({
        action:'read',
        possession:'any',
        resource:ResourcesApp.PRODUCT
    })
    @Get('one/:id')
    @ApiOperation({summary:'Get one product'})
    one(@Param('id') id:string){
        return this.productService.one(id)
    }

    @Auth({
        action:'update',
        possession:'any',
        resource:ResourcesApp.PRODUCT
    })
    @Put('update/:id')
    @ApiOperation({summary:'Update product'})
    update(@Body() data:ProductUpdateDto, @Param('id') id:string){
        return this.productService.update(id,data)
    }

    @Auth({
        action:'delete',
        possession:'any',
        resource:ResourcesApp.PRODUCT
    })
    @Delete('delete/:id')
    @ApiOperation({summary:'Delete product'})
    delete(@Param('id') id:string){
        return this.productService.delete(id)
    }

}
