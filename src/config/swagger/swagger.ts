import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";

export const setUpSwagger = (app: INestApplication): void => {
  const option: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('moyee_server')
    .setDescription('진아와 승여의 [모이] 서버 API 명세서입니다.')
    .setVersion('1.0')
    .addTag('moyee')
    .addBearerAuth()
    .build();

  const documnet = SwaggerModule.createDocument(app, option);

  SwaggerModule.setup('docs', app, documnet);
}