import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as Auth from 'express-basic-auth'
import { Swagger } from './app.swagger'
import { ValidationPipe } from '@nestjs/common'

declare const module: any
async function bootstrap() {
 
  //Tipo de app
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter()
  )
  app.enableCors({ origin: '*' })
  app.useGlobalPipes(new ValidationPipe())

  //ruta de la documentación con swagger protegida
  app.use('/api/docs', Auth({
    challenge:true,
    users:{atmr: `${process.env.SWAGGER_PASS}`}
  }))
  //doc swagger
  Swagger(app)
  //puerto
  await app.listen(3000)
  //hot reload
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
