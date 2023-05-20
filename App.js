import Router from "./src/Router";
import { ProductProvider } from "./src/context";

export default App = () => {
  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  );
}
