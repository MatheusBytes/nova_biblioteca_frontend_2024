"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    setGeneros(JSON.parse(localStorage.getItem("generos")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = generos.filter((item) => item.id !== id);
      localStorage.setItem("generos", JSON.stringify(dados));
      setGeneros(dados);
    }
  }

  return (
    <Pagina titulo="Gêneros">
      <Link href="/genero/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome do Gênero</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {generos.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/genero/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
