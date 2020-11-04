import React from 'react'

import { ContainerCard, ContainerCards, ContainerInfo } from "../PageLogin/StylePageLogin"

import ButtonsVote from './ButtonsVote'

function CardPost(props) {
    return (
        <>
            {props.post.map((post) => {
                return (
                    <ContainerCards key={post.id}>
                        <ContainerCard>
                            <ContainerInfo onClick={() => props.goToPost(post.id)}>
                                <h2>{post.username}</h2>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.text}</p>
                                </div>
                                <p>Comentários: {post.commentsCount}</p>
                            </ContainerInfo>
                            <ButtonsVote 
                                getPosts={props.getPosts}
                                post={post}
                            />
                        </ContainerCard>
                    </ContainerCards>
                )
            })}
        </>
    )
}

export default CardPost