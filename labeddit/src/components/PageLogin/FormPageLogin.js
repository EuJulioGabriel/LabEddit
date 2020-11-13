import React from 'react'

import { ContainerLogin, FormLogin, ContainerInput, LoginButton, InfoCadastro , 
         ContainerGeneralPageLogin, SignupButton, TextLogin, LoginInput } from './StylePageLogin'

function FormPageLogin(props) {
    return (
        <ContainerGeneralPageLogin>
            <ContainerLogin>
                <FormLogin onSubmit={props.handleSave}>
                    <ContainerInput>
                        <TextLogin>Email</TextLogin>
                        <LoginInput 
                            name="email" 
                            type="email"
                            placeholder="Digite aqui o seu email" 
                            value={props.form.email} 
                            onChange={props.handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextLogin>Senha</TextLogin>
                        <LoginInput
                            name="password" 
                            type="password"
                            placeholder="Digite aqui a sua senha" 
                            value={props.form.password} 
                            onChange={props.handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <LoginButton>Login</LoginButton>
                    </ContainerInput>
                </FormLogin>
            </ContainerLogin>
            <InfoCadastro>
                <h1>Ainda não é membro?</h1>
                <h3>Você não sabe o que está perdendo, cadastre-se</h3>
                <SignupButton onClick={props.goToSignUp}>Cadastrar-se</SignupButton>
            </InfoCadastro>
        </ContainerGeneralPageLogin>
    )
}

export default FormPageLogin