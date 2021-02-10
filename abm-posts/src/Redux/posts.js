// Constants
const CRE_POSTS = "CRE_POSTS"
const GET_POSTS = "GET_POSTS"
const SEL_POSTS = "SEL_POSTS"
const UPD_POSTS = "UPD_POSTS"
const DEL_POSTS = "DEL_POSTS"

// State
const initialState = {
    currentPost: {
        title:"",
        description:"",
        author:""
    },
    allPosts: [],
    msg: ""
}

// Reducer
export default function postReducer(state = initialState, action){
    switch(action.type){
        case CRE_POSTS:
            return {
                ...state,
                msg: action.payload
            }
        case GET_POSTS:
            return {
                ...state,
                currentPost: {
                    title:"",
                    description:"",
                    author:""
                },
                allPosts: action.payload,
                msg: "Post cargados"
            }
        case SEL_POSTS:
            return {
                ...state,
                currentPost: action.payload
            }
        case UPD_POSTS:
            return {
                ...state,
                msg: "Post actualizado"
            }
        case DEL_POSTS:
            return {
                ...state,
                msg: 'Post Borrado'
            }
        default:
            return state
    }
}

// Actions

export const createPost = (body) => async(dispatch) => {
    try {
        const local = JSON.parse(localStorage.getItem('posts'))
        console.log(local)
        if(local){
            local.push(body)
            localStorage.setItem('posts',JSON.stringify(local))
        }else{
            localStorage.setItem('posts',JSON.stringify([body]))
        }
        dispatch({
            type: CRE_POSTS,
            payload: 'post guardado'
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = () => (dispatch) => {
    try {
        const posts = localStorage.getItem('posts')
        dispatch({
            type: GET_POSTS,
            payload: JSON.parse(posts)
        })
    } catch (error) {
        console.log(error)
    }
}

export const selectPost = (id, body) => (dispatch) => {
    try {
        dispatch({
            type: SEL_POSTS,
            payload: {id:id,...body}
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (body) => (dispatch) => {
    try {
        const posts = JSON.parse(localStorage.getItem('posts'))
        posts.splice(body.id,1,body)
        localStorage.setItem('posts',JSON.stringify(posts))
        dispatch({
            type: UPD_POSTS,
            payload: 'post guardado'
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => (dispatch) => {
    try {
        console.log('id',id)
        const posts = JSON.parse(localStorage.getItem('posts'))
        posts.splice(id,1)
        console.log('delete',posts)
        localStorage.setItem('posts',JSON.stringify(posts))
        dispatch({
            type: DEL_POSTS,
            payload: 'post guardado'
        })
    } catch (error) {
        console.log(error)
    }
}