import { forums } from '../fixtures';
import type { Forum } from '../types';
import { getDataById } from '../utils/getDataById';

type Args = {
  id: string;
};

export const getForum = (_: any, { id }: Args) => getDataById<Forum>(forums, id);
