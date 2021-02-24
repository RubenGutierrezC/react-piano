import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Main from './components/Main/Main';
import './index.css'

function App() {
  return (
    <div className='app'>
      <Logo />
      <main className='app-content'>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
