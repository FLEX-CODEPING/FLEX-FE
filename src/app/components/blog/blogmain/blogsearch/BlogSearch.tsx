'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/app/components/blog/blogmain/blogsearch/SearchBar';
import Results from '@/app/components/blog/blogmain/blogsearch/Result';  
import { dummyPosts } from '../../../../constants/blogdata';
import { BlogPost } from '../../../../_types/blog';
import "@/app/styles/Blogstyles.css"; 
import '@/app/styles/globals.css';

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
        post.title.toLowerCase().includes(query.toLowerCase())
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
    <div className="w-full flex-center flex-col mt-[99px]">
      <div className="container">
        <h1 className="text-4xl font-bold"></h1>
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      
        
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
