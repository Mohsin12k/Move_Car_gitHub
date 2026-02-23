import Header from './components/Header';
import Footer from './components/Footer';
import city from "./components/images/city.jpeg";
import car from "./components/images/movingcar.jpeg";
import { useRef } from "react";

function App() {

  const cityRf = useRef(null);
  const carRf = useRef(null);
  const intervalRf = useRef(null);
  const countPx = useRef(0);

  const start = () => {
    if(intervalRf.current !== null) return;

    const cityWidth = cityRf.current ? cityRf.current.offsetWidth : 0;
    const carwidth = carRf.current ? carRf.current.offsetWidth : 0;
    const finishLine = cityWidth - carwidth;

    intervalRf.current = setInterval(() => {
      if(countPx.current >= finishLine){
        stop();
        reset();
        return;
      };

      countPx.current +=5;
      
      if(carRf.current) {
        carRf.current.style.left = countPx.current + "px";
      }
    },20);
  };

  const stop = () => {
    clearInterval(intervalRf.current);
    intervalRf.current = null;
  };

  const reset = () => {
    stop();
    countPx.current = 0;
    if(carRf.current){
      carRf.current.style.left = "0px";
    }
  };

  return (
    <>
    <Header start={start} stop={stop} reset={reset} />
    <main className="custom-height-vh w-full">
          {/* CHANGE: justify-center -> justify-start AND added overflow-hidden */}
          <section className="bg-gray-950 relative w-full custom-height-vh
           flex justify-start items-center overflow-hidden">
            
            {/* City Image - Centered manually so it stays put */}
            <img
              ref={cityRf}
              src={city}
              alt="city"
              className="absolute z-0 custom-city-width ml-[13%]
              border-4 border-solid border-gray-950 rounded-2xl"
            />
            
            {/* Car Image - Ready to drive! */}
            <img
              ref={carRf}
              src={car}
              alt="car"
              className="absolute z-10 custom-car-width mt-[22%] custom-left-margin"
            />
          </section>
    
    </main>
    <Footer />
    </>
  )
}

export default App
