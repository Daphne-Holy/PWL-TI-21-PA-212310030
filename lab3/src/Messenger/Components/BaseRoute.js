import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../ChapterOne";
import { ChapterTwo } from "../ChapterTwo/Index";
import SignIn from "../ChapterTwo/Widgets/Authentifications/Index";
import LayoutInit from "./LayoutInit";
import Authentifications from "../ChapterTwo/Widgets/Authentifications/Index";
import ErrorPage from "./ErrorPage";

export default function BaseRoute() {
  const arrayRoute = [{ path: "home", element: <ChapterOne /> },
  { path: "sign-in", element: <Authentifications /> },
  { path: "sign-out", element: <Authentifications /> },
  { path: "chapter-one", element: <ChapterOne /> },
  { path: "chapter-two", element: <ChapterTwo /> }]
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<LayoutInit><ChapterOne /></LayoutInit>} />
        {/* <Route path="home" element={<LayoutInit><ChapterTwo /></LayoutInit>} />
        <Route path="sign-in" element={<Authentifications />} />
        <Route path="sign-out" element={<Authentifications />} />
        <Route path="chapter-one" element={<LayoutInit><ChapterOne /></LayoutInit>} />
        <Route path="chapter-two" element={<LayoutInit><ChapterTwo /></LayoutInit>} /> */}
        <Route path="*" element={<ErrorPage />} />
        {arrayRoute.map((route, index) => (
          <Route key={index} path={route.path} element={<LayoutInit>{route.element}</LayoutInit>} />
        ))}
      </Routes>


    </React.Suspense>
  );
}