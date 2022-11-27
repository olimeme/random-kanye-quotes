import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./page/MainPage";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
