import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Sabor Eletrônicos')
    .setDescription(
      'Product listing, authorization, and user authentication API',
    )
    .setVersion('1.0')
    .addTag('products')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use('/reference', apiReference({ content: documentFactory }));

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
