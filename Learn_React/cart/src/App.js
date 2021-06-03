import Header from "./components/Header";
import Products from "./components/Products";
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
            <Products />
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
