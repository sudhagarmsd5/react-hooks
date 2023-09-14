import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
export const Markdown = (props: { name: string }) => {
  const [markdown, setMarkdown] = useState("");
  const fileName = `./${props.name}.md`;

  useEffect(() => {
    fetch(fileName)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
      });
  }, [fileName]);

  return (
    <div>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </div>
  );
};
