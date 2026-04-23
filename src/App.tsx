import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Catalog from "./pages/Catalog.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import NewsList from "./pages/NewsList.tsx";
import NewsDetail from "./pages/NewsDetail.tsx";
import ArticlesList from "./pages/ArticlesList.tsx";
import ArticleDetail from "./pages/ArticleDetail.tsx";
import Reviews from "./pages/Reviews.tsx";
import Warranty from "./pages/Warranty.tsx";
import Contacts from "./pages/Contacts.tsx";
import Partnership from "./pages/Partnership.tsx";
import Help from "./pages/Help.tsx";

import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import ForgotPassword from "./pages/auth/ForgotPassword.tsx";
import ResetPassword from "./pages/auth/ResetPassword.tsx";

import MyOrders from "./pages/account/MyOrders.tsx";
import OrderChat from "./pages/account/OrderChat.tsx";
import OrderBridge from "./pages/account/OrderBridge.tsx";
import OrderCreated from "./pages/account/OrderCreated.tsx";
import Profile from "./pages/account/Profile.tsx";

import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminOrdersQueue from "./pages/admin/AdminOrdersQueue.tsx";
import AdminOrderDetail from "./pages/admin/AdminOrderDetail.tsx";
import AdminProducts from "./pages/admin/AdminProducts.tsx";
import AdminProductEdit from "./pages/admin/AdminProductEdit.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/help" element={<Help />} />

          {/* Auth */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />

          {/* Buyer */}
          <Route path="/account/orders" element={<MyOrders />} />
          <Route path="/account/orders/:id" element={<OrderChat />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/orders/new" element={<OrderBridge />} />
          <Route path="/orders/created" element={<OrderCreated />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminOrdersQueue />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetail />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/:slug" element={<AdminProductEdit />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
