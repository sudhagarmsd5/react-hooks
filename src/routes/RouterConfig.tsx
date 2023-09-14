import { Route, Routes } from "react-router-dom";
import {
  UseState,
  UseEffect,
  UseContext,
  UseReducer,
  UseCallback,
  UseMemo,
  UseRef,
  UseLayoutEffect,
  UseImperativeHandle,
} from "../components";
export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<UseState />}></Route>
      <Route path="1" element={<UseEffect />}></Route>
      <Route path="2" element={<UseContext />}></Route>
      <Route path="3" element={<UseReducer />}></Route>
      <Route path="4" element={<UseCallback />}></Route>
      <Route path="5" element={<UseMemo />}></Route>
      <Route path="6" element={<UseRef />}></Route>
      <Route path="7" element={<UseLayoutEffect />}></Route>
      <Route path="8" element={<UseImperativeHandle />}></Route>
    </Routes>
  );
};
