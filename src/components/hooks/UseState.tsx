import { Markdown } from "../Markdown";
import { useState } from "react";

export const UseState = () => {
  const [inputValue, setInputValue] = useState("Hello");

  const onChange = (event: { target: { value: string } }) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useState"} />
        </div>
        <div className="right">
          <div>
            <input placeholder="enter something..." onChange={onChange} />
            {inputValue}
          </div>
        </div>
      </div>
    </>
  );
};
