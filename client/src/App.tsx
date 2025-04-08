import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountBanner from "@/components/DiscountBanner";
import { routes } from "./routes";

function AppContent() {
  // const location = useLocation();
  // const isAuthRoute = location.pathname.startsWith("/auth");
  // const currentRoutes = isAuthRoute ? authRoutes : routes;

  // if (isAuthRoute) {
  //   return useRoutes(currentRoutes);
  // }

  return (
    <>
      <DiscountBanner />
      <Navbar />
      {useRoutes(routes)}
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContent />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
