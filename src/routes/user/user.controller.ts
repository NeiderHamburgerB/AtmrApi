import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ResourcesApp } from 'src/app.roles'
import { Auth } from 'src/config/decorators/auth.decorators'
import { UserCreateDto, UserUpdateDto } from './dto/user.dto'
import { UserService } from './user.service'

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private userService:UserService,
                private config:ConfigService){
                    this.default()
                }

    @Auth({
        action:'create',
        possession:'any',
        resource:ResourcesApp.USER
    })
    @ApiOperation({summary: 'Method to create user'})
    @Post('create')
    create(@Body() data:UserCreateDto){
        return this.userService.create(data)
    }

    @Auth({
        action:'read',
        possession:'any',
        resource:ResourcesApp.USER
    })
    @ApiOperation({summary: 'Method to get users'})
    @Get('all')
    all(){
        return this.userService.all()
    }

    @Auth({
        action:'read',
        possession:'any',
        resource:ResourcesApp.USER
    })
    @ApiOperation({summary: 'Method to get user'})
    @Get('one/:id')
    one(@Param('id') _id:string){
        return this.userService.one({_id}, false)
    }

    @Auth({
        action:'update',
        possession:'any',
        resource:ResourcesApp.USER
    })
    @ApiOperation({summary: 'Method to update users'})
    @Put('update/:id')
    update(@Param('id') id: string, @Body() data: UserUpdateDto ){
        return this.userService.update(id, data)
    }

    @Post('default')
    default(){
        const data = {
            email:this.config.get('DEFAULT_USER'),
            password:this.config.get('DEFAULT_PASS'),
            roles:['ADMIN'],
            active:true
        }
        this.userService.default(data)
    }


}
