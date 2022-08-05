
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import PostList from './components/PostList';
import SelectedPost from './components/SelectedPost';

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <ButtonComponent />
      <br></br>
      <PostList/>
      <br></br>
      <SelectedPost/>
    </div>
  );
}

export default App;
