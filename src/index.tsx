import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Main from "@/Main";
import SnackbarProvider from "@/components/Snackbar";

const container = document.getElementById("root");
const root = createRoot(container!);

const client = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <SnackbarProvider>
          <Main />
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
