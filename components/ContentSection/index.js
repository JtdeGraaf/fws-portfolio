import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkImages from 'remark-images'

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ContentSection = ({ content }) => {
  return (
    <ReactMarkdown components={CodeBlock} className="markdown-class" remarkPlugins={[html, gfm, remarkImages, remarkUnwrapImages]}>
      {content}
    </ReactMarkdown>
  );
};

export default ContentSection;
