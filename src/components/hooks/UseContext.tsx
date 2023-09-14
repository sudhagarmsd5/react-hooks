import { Markdown } from "../Markdown";
import { createContext, useState, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<any>(null);

export const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <div className="flex-wrap">
        <div className="left">
          <Markdown name={"useContext"} />
        </div>
        <div className="right">
          <AppContext.Provider value={{ username, setUsername }}>
            <Login />
            <User />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export const User = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};
