import { users } from '../fixtures';
import type { User } from '../types';
import { getDataById } from '../utils/getDataById';

type Args = {
  id: string;
};

export const getUser = (_: any, { id }: Args) => getDataById<User>(users, id);
