
import React, { useState, Suspense } from 'react'; // Added Suspense
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Expert } from './types/expert';
import { mockInitialExperts } from './data/mockInitialExperts';

// Lazy load page components
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const FindExpertPage = React.lazy(() => import("./pages/FindExpertPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const ExpertDetailPage = React.lazy(() => import("./pages/ExpertDetailPage"));

const queryClient = new QueryClient();

// Basic loading spinner or message
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const App = () => {
  const [experts, setExperts] = useState<Expert[]>(mockInitialExperts);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route 
                  path="/trouver-expert" 
                  element={<FindExpertPage experts={experts} />} 
                />
                <Route 
                  path="/expert/:id" 
                  element={<ExpertDetailPage experts={experts} setExperts={setExperts} />} 
                />
                <Route path="/a-propos" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route 
                  path="/admin" 
                  element={<AdminPage experts={experts} setExperts={setExperts} />} 
                />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
