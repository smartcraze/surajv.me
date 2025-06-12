'use client';

import Markdown from 'markdown-to-jsx';
import { Highlight, themes } from 'prism-react-renderer';

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
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="my-6 rounded-xl bg-[#1E1E1E] overflow-hidden border border-gray-700 shadow-md font-mono">
          

          <pre className="overflow-x-auto p-4 text-sm" style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose prose-slate max-w-none dark:prose-invert hyphens-auto">
      <Markdown
        options={{
          overrides: {
            pre: {
              component: CodeBlock,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
