import { Markdown } from "../Markdown";
import { useEffect, useState, useMemo } from "react";
export const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  //  useEffect(() => {
  //    fetch("https://jsonplaceholder.typicode.com/comments")
  //      .then((response) => response.json())
  //      .then((res) => {
  //        setData(res[0].email);
  //        console.log("API CALLED");
  //      });
  //  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json().then((res) => {
        setData(res[0]);
      })
    );
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findLongestName = (comments: any) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      const currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useMemo"} />
        </div>
        <div className="right">
          <div className="App">
            <div> {getLongestName} </div>

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
