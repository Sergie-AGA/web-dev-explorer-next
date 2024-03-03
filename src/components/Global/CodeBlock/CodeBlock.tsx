import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
import "highlight.js/styles/dracula.css"; // Import dark theme
import { useEffect, useState } from "react";

hljs.registerLanguage("javascript", javascript);

interface ICodeBlockProps {
  code: any;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: ICodeBlockProps) {
  const highlightedCode = hljs.highlight(
    language,
    JSON.stringify(code || {}, null, 2)
  ).value;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="code-block dark-mode">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
}
