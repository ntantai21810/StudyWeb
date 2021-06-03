import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Card from "./components/Cart";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <Card />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
