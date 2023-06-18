import Navbar from './component/Navbar';
import Search from './component/Search';
import Hero from './component/Hero';
import Featured from './component/Featured';
import Property from './component/Property';
import Awards from './component/Awards';

function App() {
    return (
      <main>
        <header>
          <Navbar />
        </header>
        <main>
        <section className='hero-section'>
          <Hero />
          <Search />
        </section>
        <section className='featured-section'>
          <Featured />
        </section>
        <section className='property-section'>
          <Property />
        </section>
        <section className='award-section'>
          <Awards />
        </section>
      </main>
      </main>
      
  );
}

export default App;
 