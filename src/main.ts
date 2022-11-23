import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { setUpSwagger } from 'config/swagger/swagger';
import { ValidationPipe } from 'common/pipes/validation.pipe';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app: NestFastifyApplication = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: false }
  );

  const port: number = await app.get(ConfigService).get('PORT');
  setUpSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);

  Logger.log(`Application is running on ${await app.getUrl()}`);
}
bootstrap();