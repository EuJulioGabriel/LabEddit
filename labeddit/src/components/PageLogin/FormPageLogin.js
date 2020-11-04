import React from 'react'

import { ContainerLogin, FormLogin, ContainerInput, LoginButton, InfoCadastro , 
         ContainerGeneralPageLogin, SignupButton, TextLogin } from './StylePageLogin'

function FormPageLogin(props) {
    return (
        <ContainerGeneralPageLogin>
            <ContainerLogin>
                <FormLogin onSubmit={props.handleSave}>
                    <ContainerInput>
                        <TextLogin>Email</TextLogin>
                        <input 
                            name="email" 
                            type="email" 
                            value={props.form.email} 
                            onChange={props.handleInputChange}
                            required 
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <TextLogin>Senha</TextLogin>
                        <input 
                            name="password" 
                            type="password" 
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