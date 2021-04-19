import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  let arr = [1, 2, 3, 4, 5];
  let arrTag = arr.map((item, index) => <span key={index}>{item}</span>);
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Product
            name="Test title"
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          />
        </div>
        <div className="col-lg-3">
          <Product
            name="Title 2"
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </div>
        <div className="col-lg-3">
          <Product
            name="Title 2"
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </div>
        <div className="col-lg-3">
          <Product
            name="Title 2"
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
        </div>
      </div>
      {arrTag}
    </div>
  );
}

export default App;
