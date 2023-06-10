import Navbar from './component/Navbar';
import Search from './component/Search';
import Hero from './component/Hero';
import './App.css';

function App() {
    return (
      <>
        <header>
          <Navbar />
        </header>

        <main>
        <section className='hero-section'>
          <Hero />
          <Search />
        </section>
      </main>
      </>
      
  );
}

export default App;
 