import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filtered);
    setPage(1);
  }, [search, posts]);

  const paginatedPosts = filtered.slice((page - 1) * perPage, page * perPage);

  if (loading) return <p className="text-center text-muted-foreground">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">API Posts</h2>
      <Input
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedPosts.map((post) => (
          <Card key={post.id} className="p-4">
            <h3 className="font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="self-center text-sm text-muted-foreground">Page {page}</span>
        <Button
          variant="outline"
          onClick={() =>
            setPage((prev) =>
              prev < Math.ceil(filtered.length / perPage) ? prev + 1 : prev
            )
          }
          disabled={page >= Math.ceil(filtered.length / perPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}