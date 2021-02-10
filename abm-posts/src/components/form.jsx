import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts, updatePost } from "../Redux/posts";

const FormPosts = () => {
  const dispatch = useDispatch();
  const post = useSelector((store) => store.currentPost);
  const [form, setForm] = useState(post);

  useEffect(() => {
    setForm(post);
  }, [post]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.id >= 0 ? dispatch(updatePost(form)) : dispatch(createPost(form));

    dispatch(getPosts());
  };

  return (
    <div style={{width:'30%'}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Description</label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={form.author}
            onChange={handleChange}
          />
        </div>
        <div className="buttons mb-3" style={{margin:'10px'}}>
          <input type="submit" className='btn btn-light' value={form.id >= 0 ? "update" : "create"} />
          {form.id >= 0 && (
            <input
              type="button"
              className='btn btn-light'
              onClick={() => dispatch(getPosts())}
              value="cancel"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormPosts;
