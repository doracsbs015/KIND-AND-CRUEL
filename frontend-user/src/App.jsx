import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Subscription from "./pages/Subscription/Subscription";
import Analytics from "./components/Analytics"; // your GA tracker

function App() {
  return (
    <BrowserRouter>
      {/* Place Analytics OUTSIDE Routes */}
      <Analytics />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/daily-quote" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
