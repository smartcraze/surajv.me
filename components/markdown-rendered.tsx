'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Highlight, themes } from 'prism-react-renderer';
import Image from 'next/image';

interface CodeBlockProps {
  children?: React.ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const codeElement = children as React.ReactElement;

  if (
    !codeElement ||
    typeof codeElement !== 'object' ||
    !('props' in codeElement)
  ) {
    return null;
  }

  const rawCode = (codeElement.props as { children: string }).children.trim();
  const className = (codeElement.props as { className?: string }).className || '';
  const languageMatch = className.match(/language-(\w+)/);
  const language = languageMatch ? languageMatch[1] : 'plaintext';

  return (
    <Highlight theme={themes.vsDark} code={rawCode} language={language}>
      {({ style, tokens,  getTokenProps }) => (
        <div className="my-6 overflow-hidden rounded-xl border border-neutral-700 bg-[#1e1e1e] shadow-lg">
          <pre className="overflow-x-auto px-4 py-4 text-sm" style={style}>
            {tokens.map((line, i) => (
              <div key={i} className="table-row">
                
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

const MarkdownImage = (props: React.JSX.IntrinsicElements['img']) => {
  const src = props.src || '';
  const alt = props.alt || 'Image';
  const isStatic = typeof src === 'string' && src.startsWith('/');

  return (
    <figure  className="my-6 flex justify-center">
      <Image
        src={isStatic ? src : '/fallback.png'}
        alt={alt}
        width={800}
        height={500}
        className="rounded-lg shadow-md object-contain max-h-[500px] w-auto h-auto"
      />
    </figure>
  );
};

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none hyphens-auto">
      <Markdown
        options={{
          overrides: {
            pre: {
              component: CodeBlock,
            },
            img: {
              component: MarkdownImage,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
