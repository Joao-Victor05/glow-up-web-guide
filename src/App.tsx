
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Empreendedorismo from "./pages/Empreendedorismo";
import PlanoCarreira from "./pages/PlanoCarreira";
import Saude from "./pages/Saude";
import MapaInterativo from "./pages/MapaInterativo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/empreendedorismo" element={<Empreendedorismo />} />
          <Route path="/plano-carreira" element={<PlanoCarreira />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/mapa-interativo" element={<MapaInterativo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
