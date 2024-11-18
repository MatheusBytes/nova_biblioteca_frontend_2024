import * as Yup from "yup";

const UsuarioValidator = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    email: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
    endereco: Yup.string()
        .required('Campo obrigatório'),
});

export default UsuarioValidator;
