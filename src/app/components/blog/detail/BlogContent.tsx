'use client';

import DOMPurify from 'dompurify';
import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  const sanitizedContent = content ? DOMPurify.sanitize(content) : '';
  console.log(content);
  return (
    <div className="w-[880px] mt-5 mb-[100px] flex flex-col gap-11">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="markdown-body"
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-3 my-3" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-3 my-3" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>

      <img
        className="w-full"
        src="https://stockboy.co.kr/wp-content/uploads/2023/11/Screenshot-2023-11-18-at-11.35.59-PM-1024x550-optimized.png"
        alt=""
      />
    </div>
  );
};
export default BlogContent;
