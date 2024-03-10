import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Test')
    .setDescription('react_nest')
    .setVersion('0.1')
    .build();

  app.enableCors();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') || 5000);
}
bootstrap();
