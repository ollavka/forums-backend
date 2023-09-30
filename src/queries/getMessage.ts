import { messages } from '../fixtures';
import type { Message } from '../types';
import { getDataById } from '../utils/getDataById';

type Args = {
  id: string;
};

export const getMessage = (_: any, { id }: Args) => getDataById<Message>(messages, id);
