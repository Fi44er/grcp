import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ClientModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3002', // замените на фактический адрес и порт вашего gRPC-сервиса
      package: 'posts',
      protoPath: join(__dirname, '../schema.proto'), // возможна леди баг
    },
  });
  await app.listen();
}

bootstrap();