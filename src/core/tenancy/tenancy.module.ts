import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { TenancyConnectionMiddleware } from './tenancy-connection.middleware';

@Module({
  imports: [AuthModule],
})
export class TenancyModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(TenancyConnectionMiddleware).forRoutes('users/user');
  }
}
