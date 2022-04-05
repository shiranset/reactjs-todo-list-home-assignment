import React from "react";

import Home from "./components/Home/Home";
import {QueryClient, QueryClientProvider} from "react-query";

export default function App() {
    const queryClient = new QueryClient();

    return (
    <div>
        <QueryClientProvider client={queryClient}>
            <Home/>
        </QueryClientProvider>
    </div>
  );
}
