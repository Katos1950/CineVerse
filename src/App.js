import logo from './logo.svg';
import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header,Footer, ScrollToTop } from './components';

function App() {
  return (
    <>
      <Header/>
      <section>
        <ScrollToTop/>
        <AllRoutes/>
      </section>
      <Footer/>
    </>
    
  );
}

export default App;
