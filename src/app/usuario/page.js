"use client";

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("usuarios")) || []);
  }, []);

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const dados = usuarios.filter((item) => item.id !== id);
      localStorage.setItem("usuarios", JSON.stringify(dados));
      setUsuarios(dados);
    }
  }

  return (
    <Pagina titulo="Usuários">
      <Link href="/usuario/form" className="btn btn-primary mb-3 mt-3">
        <FaPlusCircle /> Novo
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
        
          </tr>
        </thead>
        <tbody>
          {usuarios.map((item, i) => (
            <tr key={item.id}>
              <td>
                <Link href={`/usuario/form/${item.id}`}>
                  <FaRegEdit title="Editar" className="text-primary" />
                </Link>

                <AiOutlineDelete
                  className="text-danger"
                  title="Excluir"
                  onClick={() => excluir(item.id)}
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <th>{item.endereco}</th>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
}
