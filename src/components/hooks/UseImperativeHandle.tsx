import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Markdown } from "../Markdown";

export const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useImperativeHandle"} />
        </div>
        <div className="right">
          <div>
            <button
              onClick={() => {
                buttonRef.current.alterToggle();
              }}
            >
              Button From Parent
            </button>
            <Button ref={buttonRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Button = forwardRef((_props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});
