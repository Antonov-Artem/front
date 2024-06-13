import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { createPostSchema } from 'features/create-post/model/createPostSchema';
import { createPost } from 'entities/post/api';
import { CreatePostData } from 'entities/post';

interface Props extends HTMLAttributes<HTMLFormElement> {}

export const CreatePostForm = ({ className, ...props }: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreatePostData>({ resolver: zodResolver(createPostSchema) });

  const onSubmited = (data: CreatePostData) => {
    createPost(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmited)}
      className={clsx(
        'grid',
        'h-12',
        'grid-cols-[1fr_auto]',
        'gap-2',
        className,
      )}
      {...props}
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
          'placeholder-neutral-500',
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
          'font-medium',
          'text-white',
          'disabled:opacity-70',
        )}
      >
        Send
      </button>
    </form>
  );
};
