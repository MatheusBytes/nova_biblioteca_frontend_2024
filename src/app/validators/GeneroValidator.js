import * as Yup from "yup";

const GeneroValidator = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    descricao: Yup.string()
        .required('Campo obrigatório')
        .min(5, 'O mínimo de caracteres é 5!'),
});

export default GeneroValidator;
