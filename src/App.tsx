import BikeCases from "./components/BikeCases";
import Footer from "./components/pagesFooter";
import SearchBar from "./components/searchBar";
import { Container } from "./globals";

function App() {
  return (
    <>
      <Container>
        <SearchBar></SearchBar>
        <BikeCases></BikeCases>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
