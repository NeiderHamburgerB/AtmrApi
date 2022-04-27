import { ConfigModule } from "@nestjs/config"
import globalEnv from "./envs/global.env"

export const EnvironmentProvider = ConfigModule.forRoot({
    isGlobal:true, //disponible en toda la app
    load:[globalEnv] //cargamos los envs, en este caso lo dejare todo en el global
})