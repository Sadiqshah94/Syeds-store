import {
  App,
  BrowserRouter,
  createRoot,
  PersistGate,
  persistor,
  Provider,
  store,
} from "./index";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
