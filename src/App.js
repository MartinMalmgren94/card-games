import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const backgroundStyle = {
    minHeight: '100vh'
  };

  return (
    <div className="App" style={backgroundStyle}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <p> dashboard </p> } />
          <Route path='/test' element={ <p> test </p>} />
          <Route path='*' element={ <p> Page not found </p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
