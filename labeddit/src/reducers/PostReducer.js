export const initialState = {
    post: [],
    comment: []
}

export const PostReducer = (state, action) => {
    switch(action.type) {
        case "Render":
            return { post: action.post, comment: action.post.comments }
        default: 
            return state 
    }
}