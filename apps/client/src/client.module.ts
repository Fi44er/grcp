import { Module } from '@nestjs/common';

import { ClientService } from './client.service';
import { PostsController } from './client.controller';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [ClientService],
})
export class ClientModule {}
