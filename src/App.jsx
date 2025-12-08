import MainLayout from "./layout/MainLayout";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";

function App() {
  return (
    <MainLayout>
      <LandingPage />
      <Products />
      <Footer />
    </MainLayout>
  );
}

export default App;
