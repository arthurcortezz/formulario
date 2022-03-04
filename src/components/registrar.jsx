import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components'
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
    "(", /[0-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/
];
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .max(120, 'Campo nome muito longo!')
        .required('O campo nome é obrigatório!'),
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('O campo email é obrigatório!'),
    cell: Yup.string()
        .max(21, 'Campo muito longo!'),
    pass: Yup.string()
        .required('O campo é obrigatório!')
        .min(6, 'O campo precisa ter 6 ou mais caracteres!'),
    pass2: Yup.string()
        .required('O campo é obrigatório!')
        .oneOf([Yup.ref('pass'), null], 'As senhas precisam ser iguais!')
});
const Registrar = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            cell: '',
            pass: '',
            pass2: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {({ errors, touched }) => (
            <CenterDiv>
                <FormDiv>
                    <ItensDiv>
                        <h1>Cadastro</h1>
                        <Form className='formm'>
                            <InputDiv>
                                <ConteudoFormDiv>
                                    <LabelDiv>
                                        <label>Nome</label>
                                        <ErrorMessage component="div" className="error" name="name" />
                                    </LabelDiv>
                                    <Field name="name" />
                                </ConteudoFormDiv>
                                <ConteudoFormDiv>
                                    <LabelDiv>
                                        <label>email</label>
                                        <ErrorMessage component="div" className="error" name="email" />
                                    </LabelDiv>
                                    <Field name="email" type="email" />
                                </ConteudoFormDiv>
                                <ConteudoFormDiv>
                                    <LabelDiv>
                                        <label>telefone</label>
                                        <ErrorMessage name="cell" />
                                    </LabelDiv>
                                    <Field name="cell" component="div" className="error" render={({ field }) => (
                                        <MaskedInput
                                            {...field}
                                            mask={phoneNumberMask}
                                            id="phone"
                                            type="text"
                                            className={
                                                errors.phone && touched.phone
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                    )} />
                                </ConteudoFormDiv>
                                <ConteudoFormDiv>
                                    <LabelDiv>
                                        <label>senha</label>
                                        <ErrorMessage component="div" className="error" name="pass" />
                                    </LabelDiv>
                                    <Field name="pass" type="password" />
                                </ConteudoFormDiv>
                                <ConteudoFormDiv>
                                    <LabelDiv>
                                        <label>confirmar senha</label>
                                        <ErrorMessage component="div" className="error" name="pass2" />
                                    </LabelDiv>
                                    <Field name="pass2" type="password" />
                                </ConteudoFormDiv>
                            </InputDiv>
                            <ButtonDiv>
                                <button type="submit">Enviar</button>
                            </ButtonDiv>
                        </Form>
                    </ItensDiv>
                </FormDiv>
            </CenterDiv>
        )}
    </Formik>
); export default Registrar;

const LabelDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`;
const ButtonDiv = styled.div`
    align-items: center;
    width: 100%;
    padding: 20px;
`;
const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:100%;
    input{
        width: 100%;        
    }
    label{
        width: 25%;
    }
    justify-content: center;
`;
const ConteudoFormDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 5px;
`;
const CenterDiv = styled.div`
    margin: 10px 10px;
`;
const FormDiv = styled.div`
    justify-content: center;
    text-align: center;
    border-style: solid;
    border-color: black;
    margin-top:20px;
`;
const ItensDiv = styled.div`
text-align: center;
margin-top:20px;
    input{
        height: 30px;
        color: black;
        background-color: white;
    }
    button{
        width: 40%;
        height: 40px;
        background-color: white;
        cursor: pointer;
        color: black;
        border: 1;
        font-size: 19px;
    }
    button:hover{
        background-color: #181818;
        color: white;
    }  
`;