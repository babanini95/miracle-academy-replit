import { BrowserRouter, useRoutes } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountBanner from "@/components/DiscountBanner";
import { routes } from "./routes";

function Router() {
  return useRoutes(routes);
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DiscountBanner />
        <Navbar />
        <Router />
        <Footer />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
