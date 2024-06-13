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
        placeholder="Send post..."
        className={clsx(
          'h-full',
          'w-full',
          'rounded-lg',
          'border',
          'border-neutral-400',
          'px-4',
          'outline-none',
          'placeholder-neutral-500',
        )}
      />
      <button
        type="submit"
        disabled={!isValid}
        className={clsx(
          'h-full',
          'w-12',
          'flex',
          'gap-2',
          'items-center',
          'justify-center',
          'cursor-pointer',
          'rounded-lg',
          'bg-blue-600',
          'text-sm',
          'font-medium',
          'text-white',
          'disabled:opacity-70',
        )}
      >
        <span className={clsx('material-symbols-outlined', 'text-lg')}>
          arrow_upward
        </span>
      </button>
    </form>
  );
};
