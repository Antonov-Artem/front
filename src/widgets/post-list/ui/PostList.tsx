import { PostCard, getPosts } from 'entities/post';

export const PostList = () => {
  const { data: posts, error, isLoading } = getPosts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="h-full">
      {(posts?.length ?? 0) > 0 ? (
        <div className="flex flex-col gap-2">
          {posts?.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      ) : (
        <div className="justify-self-centent self-center">No posts yet</div>
      )}
    </div>
  );
};
