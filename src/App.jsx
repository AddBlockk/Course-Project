import React from "react";
import HomePage from "./HomePage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import CourseCatalog from "./pages/CourseCatalog";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
