import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Pagina(props) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">inicío</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/autor">autores</Nav.Link>
            <Nav.Link href="/usuario">usuarios</Nav.Link>
            <Nav.Link href="/livraria">livrarias</Nav.Link>
            <Nav.Link href="/livro">livros</Nav.Link>
            <Nav.Link href="/genero">genero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Conteúdo */}
      <div className="bg-secondary text-white text-center p-3">
        <h1 className="page-title">{props.titulo}</h1>
      </div>
      <Container className="flex-grow-1 ">{props.children}</Container>


     

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-4 mt-auto">
        <Container>
          <p className="mb-2">
            <strong>Biblioteca 2024</strong> - Explorando o conhecimento desde 2024.
          </p>
          <div className="d-flex justify-content-center mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="mt-3">© 2024 Biblioteca 2024. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
