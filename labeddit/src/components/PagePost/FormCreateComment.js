import React from 'react'

import { ContainerPublication, ContainerPost, FormPost, 
         TextPost, CreatePostButton, ContainerCreatePost } from '../PageLogin/StylePageLogin'

function FormCreateComment(props) {
    return (
        <div>
            <ContainerPublication>
                <h1>Criar Comentário</h1>
            </ContainerPublication>
            <ContainerPost>
                <FormPost onSubmit={props.handleSave}>
                    <ContainerCreatePost>
                        <TextPost 
                            name="comment" 
                            type="text" 
                            value={props.form.comment}
                            onChange={props.handleInputChange}
                            placeholder="Não há limites de caracteres, para você não limitar o seu pensamento, então digite aqui o seu comentário."
                            required
                        />
                        <CreatePostButton>Comentar</CreatePostButton>
                    </ContainerCreatePost>
                    
                </FormPost>
            </ContainerPost>
        </div>
    )
}

export default FormCreateComment