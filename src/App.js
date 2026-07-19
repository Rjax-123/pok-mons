import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import ProductList from "./components/ProductList";
import SimilarOffers from "./components/SimilarOffers";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import siteData from "./data/siteData.json";
import "./App.css";

function App() {
  return (
    <div className="lma-app">
      <Navbar />
      <main className="lma-main">
        <HeaderSection />
        <ProductList products={siteData.products} />
        <SimilarOffers offers={siteData.similar} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
