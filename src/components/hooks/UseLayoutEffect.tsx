import { useEffect, useLayoutEffect, useRef } from "react";
import { Markdown } from "../Markdown";

export const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useContext"} />
        </div>
        <div className="right">
          <div className="App">
            <input
              ref={inputRef}
              value="hello"
              style={{ width: 400, height: 60 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
