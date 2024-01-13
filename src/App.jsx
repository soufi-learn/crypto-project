import { Container } from "react-bootstrap";
import HomePage from "./components/templates/homePage";
import Header from "./components/templates/header";
import Footer from "./components/templates/footer";

function App() {

  return (
    <>
      <Container fluid='lg' >
        <Header />
        <HomePage />
        <Footer />
      </Container>
    </>
  );
}

export default App
