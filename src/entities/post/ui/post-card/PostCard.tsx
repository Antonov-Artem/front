import { clsx } from 'clsx';
import { Post } from 'entities/post/model';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => (
  <div
    className={clsx(
      'w-fit',
      'rounded-lg',
      'border',
      'border-neutral-400',
      'p-2',
    )}
  >
    {post.text}
  </div>
);
