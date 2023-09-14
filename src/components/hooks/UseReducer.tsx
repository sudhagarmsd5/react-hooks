import { useReducer } from "react";
import { Markdown } from "../Markdown";

const reducer = (
  state: { count: number; showText: boolean },
  action: { type: string }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useReducer"} />
        </div>
        <div className="right">
          <h1>{state.count}</h1>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
              dispatch({ type: "toggleShowText" });
            }}
          >
            Click Here
          </button>

          {state.showText && <p>This is a text</p>}
        </div>
      </div>
    </div>
  );
};
