import { NestExpressApplication } from "@nestjs/platform-express"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

export const Swagger = (app:NestExpressApplication) => {

    const config = new DocumentBuilder()
        .setTitle('API ATMR')
        .setDescription('Prueba backend')
        .setVersion('0.1')
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('api/docs', app, document, {
        customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-material.css'
    })

}