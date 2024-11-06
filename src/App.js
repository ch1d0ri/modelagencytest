
import Header from './components/Header';
import './App.css';
import AboutSection from './components/AboutSection';
import ModelSection from './components/ModelSection';
import ServicesSection from './components/ServicesSevtion';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AboutSection/>
        <ModelSection/>
        <ServicesSection/>
        <ApplicationForm/>
      </main>
    </div>
  );
}

export default App;
