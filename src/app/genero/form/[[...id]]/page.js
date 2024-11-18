'use client'

import Pagina from "@/app/components/Pagina";
import GeneroValidator from "@/app/validators/GeneroValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
  const route = useRouter();

  const generos = JSON.parse(localStorage.getItem('generos')) || [];
  const dados = generos.find(item => item.id == params.id);
  const genero = dados || { nome: '', descricao: '' };

  function salvar(dados) {
    if (genero.id) {
      Object.assign(genero, dados);
    } else {
      dados.id = v4();
      generos.push(dados);
    }

    localStorage.setItem('generos', JSON.stringify(generos));
    return route.push('/genero');
  }

  return (
    <Pagina titulo="Gênero">
      <Formik
        initialValues={genero}
        validationSchema={GeneroValidator}
        onSubmit={values => salvar(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
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


            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange('descricao')}
                isInvalid={!!errors.descricao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.descricao}
              </Form.Control.Feedback>
            </Form.Group>

            
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/genero"
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
