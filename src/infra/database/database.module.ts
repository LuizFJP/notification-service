import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repositoy';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
