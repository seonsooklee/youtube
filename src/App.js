import './App.scss';
import BaseHeader from "./components/BaseHeader/BaseHeader";
import {Outlet} from "react-router-dom";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <BaseHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </>
  );
}

export default App;
