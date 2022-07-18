import { Routes, Route } from "react-router-dom";
import Shop from "./components/shop/shop.component";
import Authentication from "./route/authentication/authentication.component";
import Header from "./route/header/header.component";
import Home from "./route/home/home.component";
import LandingPage from "./route/landing/landingPage.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="header" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
