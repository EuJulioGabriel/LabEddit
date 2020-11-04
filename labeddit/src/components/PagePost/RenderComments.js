import React, {useContext} from 'react'

import VoteComment from './VoteComment'

import CommentsContext from '../../contexts/CommentsContext'

import { ContainerCard, ContainerCards, ContainerInfo, ContainerPublication } from "../PageLogin/StylePageLogin"

function RenderComments() {
    const comments = useContext(CommentsContext)

    return (
        <div>
            <div>
                <ContainerPublication>
                    <h1>Comentários</h1>
                </ContainerPublication>
            </div>
            {comments.map((comment) => {
                return (
                    <ContainerCards key={comment.id}>
                        <ContainerCard>
                            <ContainerInfo>
                                <h2>{comment.username}</h2>
                                <div>
                                    <p>{comment.text}</p>
                                </div>
                            </ContainerInfo>
                                <div>
                                    <VoteComment 
                                        commentId={comment.id}
                                        commentVoteDirection={comment.userVoteDirection}
                                        commentVotesCount={comment.votesCount}
                                    />
                                </div>
                        </ContainerCard>
                    </ContainerCards>
                )
            })}
        </div>
    )
}

export default RenderComments