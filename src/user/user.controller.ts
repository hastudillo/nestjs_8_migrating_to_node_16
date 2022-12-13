import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/shared/guards/roles.guard';

import {
  IncomingMessageWithUserPayload,
  UserPayload,
} from '../core/auth/types/user-payload.type';

@Controller('users')
@UseGuards(RolesGuard)
@ApiTags('users')
export class UserController {
  @Get('user')
  @ApiResponse({
    status: 201,
  })
  async getUserLogin(
    @Req() request: IncomingMessageWithUserPayload,
  ): Promise<UserPayload> {
    console.log('controller');
    console.log(request.userPayload);
    return request.userPayload;
  }
}
