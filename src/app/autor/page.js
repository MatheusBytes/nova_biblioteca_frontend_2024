"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    setAutores(JSON.parse(localStorage.getItem("autores")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = autores.filter((item) => item.id !== id);
      localStorage.setItem("autores", JSON.stringify(dados));
      setAutores(dados);
    }
  }

  return (
    <Pagina titulo="Autores">
      <Link href="/autor/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Nacionalidade</th>
            <th>Data de Nascimento</th>
            <th>Gênero Literário</th>
          </tr>
        </thead>
        <tbody>
          {autores.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/autor/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.nacionalidade}</td>
              <td>{item.data_nascimento}</td>
              <td>{item.genero_literario}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
