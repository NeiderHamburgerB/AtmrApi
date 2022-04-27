import { Types } from 'mongoose'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator'
export class ProductCreateDto {

    
    createdBy:Types.ObjectId

    @ApiProperty({
        type:String
    })
    @IsString()
    name:string

    @ApiProperty({
        type:Number
    })
    @IsNumber()
    price:number

    @ApiProperty({
        type:Number
    })
    @IsNumber()
    sku:number

    @ApiProperty({
        type:Number
    })
    @IsNumber()
    sales:number

    @ApiProperty({
        type:Boolean
    })
    @IsBoolean()
    active:boolean

}


export class ProductUpdateDto { 

    createdBy:Types.ObjectId

    @IsOptional()
    @ApiPropertyOptional({
        type:String
    })
    @IsString()
    name?:string

    @IsOptional()
    @ApiPropertyOptional({
        type:Number
    })
    @IsNumber()
    price?:number

    @IsOptional()
    @ApiPropertyOptional({
        type:Number
    })
    @IsNumber()
    sku?:number

    @IsOptional()
    @ApiPropertyOptional({
        type:Number
    })
    @IsNumber()
    sales?:number

    @IsOptional()
    @ApiPropertyOptional({
        type:Boolean
    })
    @IsBoolean()
    active?:boolean

}
