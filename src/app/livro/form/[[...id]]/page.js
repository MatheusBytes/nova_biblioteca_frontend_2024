'use client'

import Pagina from "@/app/components/Pagina";
import LivroValidator from "@/app/validators/LivroValidator";
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

  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  const dados = livros.find(item => item.id == params.id);
  const livro = dados || { titulo: '', autor: '', genero: '', ano_publicacao: '', editora: '' };

  function salvar(dados) {
    if (livro.id) {
      Object.assign(livro, dados);
    } else {
      dados.id = v4();
      livros.push(dados);
    }

    localStorage.setItem('livros', JSON.stringify(livros));
    return route.push('/livro');
  }

  return (
    <Pagina titulo="Livro">
      <Formik
        initialValues={livro}
        validationSchema={LivroValidator}
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
            <Form.Group className="mb-3" controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={values.titulo}
                onChange={handleChange('titulo')}
                isInvalid={!!errors.titulo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.titulo}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="autor">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                name="autor"
                value={values.autor}
                onChange={handleChange('autor')}
                isInvalid={!!errors.autor}
              />
              <Form.Control.Feedback type="invalid">
                {errors.autor}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="genero">
              <Form.Label>Gênero</Form.Label>
              <Form.Control
                type="text"
                name="genero"
                value={values.genero}
                onChange={handleChange('genero')}
                isInvalid={!!errors.genero}
              />
              <Form.Control.Feedback type="invalid">
                {errors.genero}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ano_publicacao">
              <Form.Label>Ano de Publicação</Form.Label>
              <Form.Control
                type="text"
                name="ano_publicacao"
                value={values.ano_publicacao}
                onChange={(value) => { setFieldValue('ano_publicacao', mask(value.target.value, '9999')) }}
                isInvalid={!!errors.ano_publicacao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.ano_publicacao}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editora">
              <Form.Label>Editora</Form.Label>
              <Form.Control
                type="text"
                name="editora"
                value={values.editora}
                onChange={handleChange('editora')}
                isInvalid={!!errors.editora}
              />
              <Form.Control.Feedback type="invalid">
                {errors.editora}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/livro"
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
