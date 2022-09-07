import { GlobalStyle } from './styles/global';
import Header from './components/header';
import Content from './components/content';
import Menu from './components/menu/menu';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Header />
      <Content />
    </>
  );
}

export default App;
