interface Post {
  id: number;
  title: string;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function ServerSideCache() {
  const posts = await fetchPosts();

  return (
    <div className='flex-1 items-center container mx-auto text-center'> 
      <h1>Lista de Posts (Cache Server-Side)</h1>
      <ul>
        {posts.slice(0, 50).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}