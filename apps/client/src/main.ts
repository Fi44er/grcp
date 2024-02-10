import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { join } from 'path';

import { ClientModule } from './client.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClientModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../schema.proto'), // возможна леди баг
        package: 'posts',
      },
    },
  );
  await app.listen();
}

bootstrap();