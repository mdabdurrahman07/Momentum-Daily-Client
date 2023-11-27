import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import About from "../About/About";
import Plans from "../Plans/Plans";

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Momentum Daily | Home</title>
          </Helmet>

          <section className="flex my-3">
          <h1 className="uppercase font-bold bg-red-500 text-white text-center rounded-lg">Breaking News</h1>
          
          <Marquee>
            <p className="mr-5 text-lg font-semibold">50% off on ABC.com,</p>
            <p className="mr-5 text-lg font-semibold">Australia has Won ICC23 Trophy,</p>
            <p className="mr-5 text-lg font-semibold">Major Car Accident Accord on Sitakunda,</p>
            <p className="mr-5 text-lg font-semibold">Pink Floyd Concert at Pompey</p>
            </Marquee>
          </section>
           <About></About>
           <Plans></Plans>
        </div>
    );
};

export default Home;


            {/* #353535  black*/}
            {/* primary #3c6e71 deep olive */}
            {/* #ffffff white */}
            {/* secondary #284b63 navy blue */}
            {/* ancent #d9d9d9 */}