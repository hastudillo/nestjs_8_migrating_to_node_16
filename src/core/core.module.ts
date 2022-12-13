import { Global, MiddlewareConsumer, Module } from '@nestjs/common';

import { UserController } from '../user/user.controller';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { TenancyModule } from './tenancy/tenancy.module';

@Global()
@Module({
  imports: [AuthModule, TenancyModule],
  exports: [AuthModule, TenancyModule],
})
export class CoreModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthMiddleware)
      // TODO: use wildcards instead? https://github.com/nestjs/nest/pull/9332
      .forRoutes(UserController);
  }
}
