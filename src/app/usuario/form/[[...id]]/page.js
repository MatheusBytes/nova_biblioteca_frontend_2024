'use client'

import Pagina from "@/app/components/Pagina";
import UsuarioValidator from "@/app/validators/UsuarioValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const dados = usuarios.find(item => item.id == params.id);
  const usuario = dados || { nome: '', email: '', telefone: '', endereco: '' };

  function salvar(dados) {
    if (usuario.id) {
      Object.assign(usuario, dados);
    } else {
      dados.id = v4();
      usuarios.push(dados);
    }

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return route.push('/usuario');
  }

  return (
    <Pagina titulo="Usuário">
      <Formik
        initialValues={usuario}
        validationSchema={UsuarioValidator}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
        }) => (
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange('nome')}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={values.telefone}
                onChange={(value) => { setFieldValue('telefone', mask(value.target.value, '(99) 99999-9999')) }}
                isInvalid={!!errors.telefone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="endereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                name="endereco"
                value={values.endereco}
                onChange={handleChange('endereco')}
                isInvalid={!!errors.endereco}
              />
              <Form.Control.Feedback type="invalid">
                {errors.endereco}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/usuario"
                className="btn btn-danger ms-2"
              >
                <MdOutlineArrowBack /> Voltar
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
