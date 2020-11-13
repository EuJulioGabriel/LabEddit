import React from 'react'

import { ContainerSignUp, FormLogin, ContainerInput,
         SignupButton, TextLogin, LoginInput } from '../PageLogin/StylePageLogin'
  
function FormPageSignup(props) {
    return (
        <ContainerSignUp>
            <FormLogin onSubmit={props.handleSave}>
                <ContainerInput>
                    <TextLogin>Nome de Usuário</TextLogin>
                    <LoginInput
                        onChange={props.handleInputChange}
                        name={"userName"}
                        value={props.form.userName} 
                        placeholder={"Nome de usuário"}
                        type={"text"} 
                        required
                    />
                </ContainerInput>
                <ContainerInput>
                    <TextLogin>Email</TextLogin>
                    <LoginInput
                        onChange={props.handleInputChange} 
                        name={"email"} 
                        value={props.form.email} 
                        placeholder={"Email"} 
                        type={"email"} 
                        required
                    />
                </ContainerInput>
                <ContainerInput>
                    <TextLogin>Senha</TextLogin>
                    <LoginInput
                        onChange={props.handleInputChange} 
                        name={"password"} 
                        value={props.form.password} 
                        placeholder={"Senha"} 
                        type={"password"} 
                        required
                    />
                </ContainerInput>
                <ContainerInput>
                    <SignupButton>Cadastrar</SignupButton>
                </ContainerInput>
            </FormLogin>
        </ContainerSignUp>
    )
}

export default FormPageSignup