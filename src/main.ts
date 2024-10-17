import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const configService = app.get<ConfigService>(ConfigService);
  const PORT = configService.get<string>('PORT') || 4000;
  await app.listen(PORT, "0.0.0.0");
}

bootstrap();
