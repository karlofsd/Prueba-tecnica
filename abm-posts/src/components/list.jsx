import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getPosts, selectPost, deletePost} from '../Redux/posts'

const ListPosts = () => {
    const posts = useSelector(store => store.allPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[])

    const handleEdit = (id, body) => {
        dispatch(selectPost(id, body))
    }

    const handleDelete = (id) => {
        dispatch(deletePost(id))
        dispatch(getPosts())
    }

  return (
    <div style={{width:'60%', marginTop:'5%'}}>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Author</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                posts?.map((post, id) => (
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td>{post.author}</td>
                        <td className='buttons'>
                            <button className='btn btn-light' onClick={() => handleEdit(id, post)}>edit</button>
                            <button className='btn btn-light' onClick={() => handleDelete(id)}>delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default ListPosts;
