import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tabs from './components/Tabs/Tabs';
import Extentions from './components/Extentions/Extentions';
import Accordion from './components/Accordion/Accordion';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tabs />
      <Extentions />
      <Accordion />
      <Email />
      <Footer />
    </div>
  );
}

export default HomePage;