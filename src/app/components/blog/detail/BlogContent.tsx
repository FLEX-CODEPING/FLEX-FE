'use client';

import DOMPurify from 'dompurify';
import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface BlogContentProps {
  content: string;
}

const CustomUl = ({ node, ...props }: any) => (
  <ul className="list-disc ml-3 my-3" {...props} />
);

const CustomOl = ({ node, ...props }: any) => (
  <ol className="list-decimal ml-3 my-3" {...props} />
);

const CustomLi = ({ node, ...props }: any) => (
  <li className="mb-1" {...props} />
);

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
          ul: CustomUl,
          ol: CustomOl,
          li: CustomLi,
        }}
      >
        {content}
      </ReactMarkdown>

      <img
        className="w-full"
        src="https://www.tradingview.com/x/L7vASBaQ/"
        alt=""
      />
    </div>
  );
};
export default BlogContent;
