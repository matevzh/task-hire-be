import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  
  app.useGlobalPipes(new ValidationPipe({
    transform: false,
    whitelist: true
  }));
  
  app.enableCors();
  
  // Log all requests and responses
  app.use((req, res, next) => {
    logger.log(`Request: ${req.method} ${req.url}`);
    res.on('finish', () => {
      logger.log(`Response: ${res.statusCode}`);
    });
    next();
  });
  
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
}
bootstrap();