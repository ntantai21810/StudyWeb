import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import Footer from "./components/Footer";
import MessageContainer from "./containers/MessageContainer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
