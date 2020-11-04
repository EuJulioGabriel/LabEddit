import React, { useContext } from 'react'

import PostDetailContent from '../../contexts/PostDetailContext'
import RequestVoteCommentContext from '../../contexts/RequestVoteCommentContext'

import ButtonsVote from './ButtonsVote'

function VoteComment(props) {
    const post = useContext(PostDetailContent)
    const requestVoteComment = useContext(RequestVoteCommentContext)

    const onClickLiked = () => {
        if (props.commentVoteDirection !== 1) {
            const body = {
                direction: 1
            }
            const commentId = props.commentId

            const postId = post.id

            requestVoteComment(body, postId, commentId)
        } else {
            onClickDeleteVote()
        }    
    }

    const onClickUnliked = () => {
        if (props.commentVoteDirection !== -1) {
            const body = {
                direction: -1
            }
    
            const commentId = props.commentId
    
            const postId = post.id
    
            requestVoteComment(body, postId, commentId)
        } else {
            onClickDeleteVote()
        }  
    }

    const onClickDeleteVote = () => {
        const body = {
            direction: 0
        }

        const commentId = props.commentId

        const postId = post.id

        requestVoteComment(body, postId, commentId)
    }

    return (
        <ButtonsVote 
            onClickLiked= {onClickLiked}
            onClickUnliked={onClickUnliked}
            commentVoteDirection={props.commentVoteDirection}
            commentVotesCount={props.commentVotesCount}
        />
    )
}

export default VoteComment