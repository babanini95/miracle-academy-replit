import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Akademi from "@/pages/Akademi/Akademi";
import ClassCategory from "./pages/Akademi/ClassCategory";
import ClassDetails from "./pages/Akademi/ClassDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountBanner from "@/components/DiscountBanner";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/akademi" element={<Akademi />} />
      <Route path="/kategori" element={<ClassCategory />} />
      <Route path="/detail" element={<ClassDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
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
