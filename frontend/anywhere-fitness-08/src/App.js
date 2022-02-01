import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  height: 95vh;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <StyledApp className="App">
      <Login />
      {/* <Register /> */}
    </StyledApp>
  );
}

export default App;
