import * as Yup from "yup";

const AutorValidator = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    nacionalidade: Yup.string()
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
        genero_literario: Yup.string()
        .required('Campo obrigatório'),

});

export default AutorValidator;
