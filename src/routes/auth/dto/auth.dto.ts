import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class loginDto{

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
}