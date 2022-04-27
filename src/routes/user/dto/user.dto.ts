import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsObject, IsString, IsArray, IsBoolean, IsOptional } from 'class-validator'

export class UserCreateDto {

    @IsObject()
    @ApiProperty({
        type:{
            type:{type:String},
            value:{type:String}
        }
    })
    document:{
        type:string,
        value:string
    }

    @IsString()
    @ApiProperty({
        type:String
    })
    name:string


    @IsString()
    @ApiProperty({
        type:String
    })
    lastname:string

    @IsString()
    @ApiProperty({
        type:String
    })
    email:string

    @IsString()
    @ApiProperty({
        type:String
    })
    password:string

    @IsArray()
    @ApiProperty({
        type:Array
    })
    roles: string[]

    @IsBoolean()
    @ApiProperty({
        type:Boolean
    })
    active:boolean

}

export class UserUpdateDto {

    @IsObject()
    @IsOptional()
    @ApiPropertyOptional({
        type:{
            type:{type:String},
            value:{type:String}
        }
    })
    document?:{
        type:string,
        value:string
    }

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        type:String
    })
    name?:string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        type:String
    })
    lastname?:string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        type:String
    })
    email?:string

    @IsBoolean()
    @IsOptional()
    @ApiPropertyOptional({
        type:Boolean
    })
    active?:boolean

}