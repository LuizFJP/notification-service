import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notiifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notiifications';
import { ReadNotification } from '@application/use-cases/read-notifications';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Get, Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
