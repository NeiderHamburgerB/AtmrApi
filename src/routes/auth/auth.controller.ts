import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { User } from 'src/config/decorators/user.decorators'
import { LocalGuard } from 'src/config/guards/local.guard'
import { IUser } from '../user/interfaces/user.interface'
import { AuthService } from './auth.service'
import { loginDto } from './dto/auth.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @ApiOperation({
        summary:'Method for login'
    })
    @UseGuards(LocalGuard)
    @Post('login')
    login(@User() user:IUser, @Body() data:loginDto){
        return this.authService.login(user)
    }

}
