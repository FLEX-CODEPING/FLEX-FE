'use client';

import Results from '@/app/components/blog/blogmain/blogsearch/Result';
import SearchBar from '@/app/components/blog/blogmain/blogsearch/SearchBar';
import { dummyPosts } from '@/app/constants/BlogData';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BlogSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setSearchExecuted(true);

    try {
      const filteredPosts = dummyPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filteredPosts);
      router.push('/blog/blogsearch');
    } catch (error) {
      console.error('Error fetching the data', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-[99px]">
      <div className="w-full max-w-[1400px]">
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />

        <Results
          results={results}
          searchExecuted={searchExecuted}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default BlogSearch;
