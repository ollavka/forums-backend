import { forums, users } from '../fixtures';
import type { Forum, User } from '../types';
import { getDataById } from '../utils/getDataById';

type Args = {
  forumId: string;
};

type Result = {
  users: User[];
  error: string | null;
};

export const getUsersByForum = (_: any, args: Args): Result => {
  const { forumId } = args;

  const forum = getDataById<Forum>(forums, forumId);

  if (!forum) {
    return {
      users: [],
      error: 'No such forum was found.',
    };
  }

  const usersByForum = users.filter(({ forumIds }) =>
    forumIds.includes(forumId)
  );

  return {
    users: usersByForum,
    error: null,
  };
};
