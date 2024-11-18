import { FaUserAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdCategory, MdLibraryBooks } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
    
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Bem-vindo à Biblioteca </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Escolha uma das opções abaixo para gerenciar os dados da biblioteca:
      </p>

      
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <a href="/usuario" style={linkStyle}>
          <FaUserAlt style={iconStyle} />
          Usuários
        </a>
        <a href="/livro" style={linkStyle}>
          <IoBookSharp style={iconStyle} />
          Livros
        </a>
        <a href="/genero" style={linkStyle}>
          <MdCategory style={iconStyle} />
          Gêneros
        </a>
        <a href="/livraria" style={linkStyle}>
          <FaBuilding style={iconStyle} />
          Livrarias
        </a>
        <a href="/autor" style={linkStyle}>
          <MdLibraryBooks style={iconStyle} />
          Autores
        </a>
      </div>

      
      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#555" }}>
        © 2024 Biblioteca 2024. Todos os direitos reservados.
      </footer>
    </div>
  );
}


const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s ease-in-out",
};

const iconStyle = {
  fontSize: "2.5rem",
  color: "#0070f3",
};
