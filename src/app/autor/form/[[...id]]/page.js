'use client'

import Pagina from "@/app/components/Pagina";
import AutorValidator from "@/app/validators/AutorValidator";
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

  const autores = JSON.parse(localStorage.getItem('autores')) || [];
  const dados = autores.find(item => item.id == params.id);
  const autor = dados || { nome: '', nacionalidade: '', telefone: '', generoLiterario: '' };

  function salvar(dados) {
    if (autor.id) {
      Object.assign(autor, dados);
    } else {
      dados.id = v4();
      autores.push(dados);
    }

    localStorage.setItem('autores', JSON.stringify(autores));
    return route.push('/autor');
  }

  return (
    <Pagina titulo="Autor">
      <Formik
        initialValues={autor}
        validationSchema={AutorValidator}
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

            <Form.Group className="mb-3" controlId="nacionalidade">
              <Form.Label>Nacionalidade</Form.Label>
              <Form.Control
                type="text"
                name="nacionalidade"
                value={values.nacionalidade}
                onChange={handleChange('nacionalidade')}
                isInvalid={!!errors.nacionalidade}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nacionalidade}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="data_nascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="text"
                name="data_nascimento"
                value={values.data_nascimento}
                onChange={(value) => { setFieldValue('data_nascimento', mask(value.target.value, '99/99/9999')) }}
                isInvalid={!!errors.data_nascimento}
              />
              <Form.Control.Feedback type="invalid">
                {errors.data_nascimento}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="genero_literario">
              <Form.Label>Gênero Literário</Form.Label>
              <Form.Control
                type="text"
                name="genero_literario"
                value={values.genero_literario}
                onChange={handleChange('genero_literario')}
                isInvalid={!!errors.genero_literario}
              />
              <Form.Control.Feedback type="invalid">
                {errors.genero_literario}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/autor"
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
