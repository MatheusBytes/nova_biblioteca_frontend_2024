"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(JSON.parse(localStorage.getItem("livros")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = livros.filter((item) => item.id !== id);
      localStorage.setItem("livros", JSON.stringify(dados));
      setLivros(dados);
    }
  }

  return (
    <Pagina titulo="Livros">
      <Link href="/livro/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ano de Publicação</th>
            <th>Editora</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/livro/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.titulo}</td>
              <td>{item.autor}</td>
              <td>{item.genero}</td>
              <td>{item.ano_publicacao}</td>
              <td>{item.editora}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
