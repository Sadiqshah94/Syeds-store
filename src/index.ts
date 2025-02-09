import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import routes from "./routes/routes.tsx";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";

export {
  PersistGate,
  persistor,
  store,
  Provider,
  BrowserRouter,
  App,
  createRoot,
  routes,
  Route,
  Routes,
  Navigate,
  Outlet,
  useSelector,
  type RootState,
};
