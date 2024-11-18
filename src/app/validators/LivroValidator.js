import * as Yup from "yup";

const LivroValidator = Yup.object().shape({
    titulo: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    autor: Yup.string()
        .required('Campo obrigatório'),
    genero: Yup.string()
        .required('Campo obrigatório'),
    ano_publicacao: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\d{4}$/, 'Ano inválido'),
    editora: Yup.string()
        .required('Campo obrigatório'),
});

export default LivroValidator;
