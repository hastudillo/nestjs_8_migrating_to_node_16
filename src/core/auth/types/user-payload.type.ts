import { IncomingMessage } from 'http';
import { Request } from 'express';

export type UserPayload = {
  test: string;
};

export type IncomingMessageWithUserPayload = IncomingMessage & {
  userPayload: UserPayload;
};

export type RequestWithUserPayload = Request & {
  userPayload: UserPayload;
};
