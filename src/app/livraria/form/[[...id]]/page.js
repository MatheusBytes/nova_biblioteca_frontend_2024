'use client'

import Pagina from "@/app/components/Pagina";
import LivrariaValidator from "@/app/validators/LivrariaValidator";
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

  const livrarias = JSON.parse(localStorage.getItem('livrarias')) || [];
  const dados = livrarias.find(item => item.id == params.id);
  const livraria = dados || { nome: '', cnpj: '', endereco: '', telefone: '', situacao: '' };

  function salvar(dados) {
    if (livraria.id) {
      Object.assign(livraria, dados);
    } else {
      dados.id = v4();
      livrarias.push(dados);
    }

    localStorage.setItem('livrarias', JSON.stringify(livrarias));
    return route.push('/livraria');
  }

  return (
    <Pagina titulo="Livraria">
      <Formik
        initialValues={livraria}
        validationSchema={LivrariaValidator}
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

            <Form.Group className="mb-3" controlId="cnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                name="cnpj"
                value={values.cnpj}
                onChange={(value) => { setFieldValue('cnpj', mask(value.target.value, '99.999.999/9999-99')) }}
                isInvalid={!!errors.cnpj}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cnpj}
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

            <Form.Group className="mb-3" controlId="situacao">
              <Form.Label>Situação</Form.Label>
              <Form.Control
                as="select"
                name="situacao"
                value={values.situacao}
                onChange={handleChange('situacao')}
                isInvalid={!!errors.situacao}
              >
                <option value="">Selecione</option>
                <option value="Ativo">ativo</option>
                <option value="Inativo">Inativo</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.situacao}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button onClick={handleSubmit} variant="success">
                <FaCheck /> Salvar
              </Button>
              <Link
                href="/livraria"
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
