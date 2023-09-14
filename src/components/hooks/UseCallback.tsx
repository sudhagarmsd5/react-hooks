import { FC, useCallback, useEffect, useState } from "react";
import { Markdown } from "../Markdown";

export const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data] = useState("Hello! This button is ");

  const returnComment = useCallback(
    (name: string) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useCallback"} />
        </div>
        <div className="right">
          <div className="App">
            <Child returnComment={returnComment} />

            <button
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Toggle
            </button>
            {toggle && <h1> toggle </h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChildProps {
  returnComment: (arg: string) => string;
}

export const Child: FC<ChildProps> = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("clickable")}</div>;
};
