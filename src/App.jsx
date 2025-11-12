import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";

function App() {
  return (
    <MainLayout>
      <LandingPage />
      <Products />
    </MainLayout>
  );
}

export default App;
