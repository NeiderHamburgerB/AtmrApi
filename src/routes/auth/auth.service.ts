import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { compareSync } from 'bcryptjs'
import { IUser } from '../user/interfaces/user.interface'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(private userService:UserService,
                private jwtService:JwtService){}

    async valid(email:string, pass:string) {
        let user = await this.userService.one({email}, true)
        if(!user) throw new NotFoundException('User not exists')
        if(!compareSync(pass, user.password)) throw new NotAcceptableException('User or password incorrect')
        let { password, ...rest } = user
        return rest
    }

    login(user:IUser){
        
        const { _id, active } = user
        if(active){
            const payload = { sub : _id}
            return {
                user,
                accessToken: this.jwtService.sign(payload)
            }
        }else{
            return 'User not active'
        }
       
    }

}
