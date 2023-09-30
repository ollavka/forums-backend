import { forums, users } from '../fixtures';
import type { Forum, User } from '../types';
import { getDataById } from '../utils/getDataById';

type Args = {
  userId: string;
  forumId: string;
};

type Result = {
  success: boolean;
  error: string | null;
};

export const joinToForum = (_: any, args: Args): Result => {
  const { userId, forumId } = args;

  const user = getDataById<User>(users, userId);
  const forum = getDataById<Forum>(forums, forumId);

  if (!user) {
    return {
      success: false,
      error: 'User not found',
    };
  }

  if (!forum) {
    return {
      success: false,
      error: 'Forum not found',
    };
  }

  if (forum.userIds.includes(userId)) {
    return {
      success: false,
      error: 'User already joined the forum',
    };
  }

  user.forumIds.push(forumId);
  forum.userIds.push(userId);

  return { success: true, error: null };
};
