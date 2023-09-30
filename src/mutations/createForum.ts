import { forums, users } from '../fixtures';
import type { Forum, User } from '../types';
import { getDataById } from '../utils/getDataById';
import { getMaxId } from '../utils/getMaxId';

type Args = {
  userId: string;
  forumName: string;
};

type Result = {
  forum: Forum | null;
  error: string | null;
};

export const createForum = (_: any, args: Args): Result => {
  const { userId, forumName } = args;

  const user = getDataById<User>(users, userId);

  if (!user) {
    return { forum: null, error: 'User not found' };
  }

  const isExistingForum = forums.some(({ name }) => name === forumName);

  if (isExistingForum) {
    return {
      forum: null,
      error: 'A forum by that name already exists',
    };
  }

  const newForumId = getMaxId<Forum>(forums);

  const newForum: Forum = {
    id: newForumId,
    name: forumName,
    userIds: [userId],
  };

  user.forumIds.push(newForumId);
  forums.push(newForum);

  return {
    forum: newForum,
    error: null,
  };
};
