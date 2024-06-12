import useSWR, { mutate } from 'swr';

import { fetcher } from 'shared/api/fetcher';
import { Post, CreatePostData } from '../model';

export const getPosts = () =>
  useSWR<Post[]>('http://localhost:3000/posts', fetcher);

export const createPost = (data: CreatePostData) => {
  mutate(
    'http://localhost:3000/posts',
    fetcher('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    }),
  );
};
