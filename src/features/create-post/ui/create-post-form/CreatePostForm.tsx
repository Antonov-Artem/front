import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';

import { createPostSchema } from 'features/create-post/model/createPostSchema';
import { createPost } from 'entities/post/api';
import { CreatePostData } from 'entities/post';

export const CreatePostForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreatePostData>({ resolver: zodResolver(createPostSchema) });

  const onSubmit = (data: CreatePostData) => {
    createPost(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-12 grid-cols-[1fr_auto] gap-2"
    >
      <input
        {...register('text')}
        type="text"
        placeholder="Enter post text..."
        className={clsx(
          'h-full',
          'w-full',
          'rounded-lg',
          'border',
          'border-neutral-400',
          'px-4',
          'outline-blue-600',
        )}
      />
      <button
        type="submit"
        disabled={!isValid}
        className={clsx(
          'h-full',
          'w-full',
          'cursor-pointer',
          'rounded-lg',
          'bg-blue-600',
          'px-4',
          'text-sm',
          'text-white',
          'disabled:opacity-70',
        )}
      >
        Send
      </button>
    </form>
  );
};
