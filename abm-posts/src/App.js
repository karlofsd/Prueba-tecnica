import ListPosts from './components/list'
import FormPosts from './components/form'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>POSTS</h1>
      <FormPosts/>
      <ListPosts/>
    </div>
  );
}

export default App;
