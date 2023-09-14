import { useRef } from "react";
import { Markdown } from "../Markdown";

export const UseRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useRef"} />
        </div>
        <div className="right">
          <div>
            <h1>Hello</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Clear Value</button>
          </div>
        </div>
      </div>
    </div>
  );
};
