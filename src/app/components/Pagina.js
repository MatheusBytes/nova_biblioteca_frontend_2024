import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Pagina(props) {
  return (
    <div className="d-flex flex-column min-vh-100">
     
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
          <IoLibrary />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/autor" className="text-white">
                Autores
              </Nav.Link>
              <Nav.Link href="/usuario" className="text-white">
                Usuários
              </Nav.Link>
              <Nav.Link href="/livraria" className="text-white">
                Livrarias
              </Nav.Link>
              <Nav.Link href="/livro" className="text-white">
                Livros
              </Nav.Link>
              <Nav.Link href="/genero" className="text-white">
                Gêneros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div className="bg-light text-dark text-center py-4 border-bottom">
        <h1 className="page-title fw-bold" style={{ fontSize: "2.5rem" }}>
          {props.titulo}
        </h1>
      </div>

     
      <Container className="flex-grow-1 py-4">{props.children}</Container>

     
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
