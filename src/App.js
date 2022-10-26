import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/css/style.css';
import Main from './page/main-pages/Main';
import Message from './page/message-pages/Message';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/message-privé' element={<Message />}/>
        <Route path='*' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;