import { useEffect, useState } from "react";
import { Markdown } from "../Markdown";

export const UseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((res) => {
        setData(res[0].email);
        console.log("API CALLED");
      });
  }, []);

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useEffect"} />
        </div>
        <div className="right">{data}</div>
      </div>
    </div>
  );
};
