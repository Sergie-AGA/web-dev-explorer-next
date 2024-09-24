// import "highlight.js/styles/github.css";
// import "highlight.js/styles/dracula.css";
import Highlight from "react-highlight";

interface ICodeBlockProps {
  code: any;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: ICodeBlockProps) {
  return (
    <Highlight className={language}>
      {JSON.stringify(code || {}, null, 2)}
    </Highlight>
  );
}
