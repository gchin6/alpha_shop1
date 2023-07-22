import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import StepProgress from './Components/Main/StepProgress/StepProgress'
import Step1 from './Components/Main/Step/Step1'
import Step2 from './Components/Main/Step/Step2'
import Step3 from './Components/Main/Step/Step3'
import ProgressControl from './Components//Main/ProgressControl/ProgressControl'


export default function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <div className="stepContainer">
          <StepProgress />
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
        <div className='controlContainer'>
          <ProgressControl />
        </div>
      </main>
      <Footer />
    </>
  );
}
