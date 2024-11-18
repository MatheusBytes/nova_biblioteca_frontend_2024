import * as Yup from "yup";

const LivrariaValidator = Yup.object().shape({
    nome: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O mínimo de caracteres é 3!'),
    cnpj: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
    endereco: Yup.string()
        .required('Campo obrigatório'),
    telefone: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
    situacao: Yup.string()
        .required('Campo obrigatório')
        .oneOf(['Ativo', 'Inativo'], 'Situação inválida'),
});

export default LivrariaValidator;
