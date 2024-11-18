"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [livrarias, setLivrarias] = useState([]);

  useEffect(() => {
    setLivrarias(JSON.parse(localStorage.getItem("livrarias")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = livrarias.filter((item) => item.id !== id);
      localStorage.setItem("livrarias", JSON.stringify(dados));
      setLivrarias(dados);
    }
  }

  return (
    <Pagina titulo="Livrarias">
      <Link href="/livraria/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {livrarias.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/livraria/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.cnpj}</td>
              <td>{item.endereco}</td>
              <td>{item.telefone}</td>
              <td>{item.situacao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
