/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import aboutAnimation from '../../assets/aboutAnimations/Animation - 1701119616033.json'

const About = () => {
    return (
        <div data-aos="fade-up" className="my-10">
            <div className="font-semibold text-4xl text-[#3c6e71] p-3 text-center">
            <Typewriter
            words={['About Us']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
            </div>

            <div className="space-y-5 p-3">
                <div className="flex-row md:flex justify-around items-center gap-5">
                <section className="">
                    <Lottie animationData={aboutAnimation}></Lottie>
               <p className="text-2xl font-medium my-2"><span className="text-4xl font-bold">W</span>elcome to Momentum Daily, your go-to source for breaking news, insightful analysis, and thought-provoking articles. At Momentum Daily, we believe in the power of information to inspire and drive positive change. Our dedicated team of journalists, writers, and editors is committed to delivering accurate, timely, and engaging content that keeps you informed and connected to the world around you.</p>
               </section>
              <section>
              <p><h1 className="text-center font-semibold text-3xl text-[#E9B384] my-1"><u>Our Mission</u></h1>
                <p className="text-2xl font-medium my-2">
                Our mission at Momentum Daily is to empower our readers with knowledge that matters. We strive to provide a diverse range of perspectives, covering everything from current events to in-depth features, ensuring that you have a comprehensive understanding of the issues that shape our world.
                </p>
                </p>
                <p><h1 className="text-center font-semibold text-3xl text-[#E9B384] my-1"><u>Premium Content</u></h1>
                <p className="text-2xl font-medium my-2">
                For our discerning readers seeking an elevated experience, we offer premium articles that delve deeper into the stories that matter most. By subscribing to Momentum Daily Premium, you gain access to exclusive content, expert analyses, and in-depth investigations. Your support allows us to maintain the high standards of journalism you've come to expect from us.
                </p>
                </p>
                <p><h1 className="text-center font-semibold text-3xl text-[#E9B384] my-1"><u>Non-Premium Articles</u></h1>
                <p className="text-2xl font-medium my-2">
                We believe in making quality news accessible to everyone. That's why the majority of our articles are available for free. We understand the importance of an informed society, and our commitment to providing valuable content extends to readers from all walks of life.
                </p>
                </p>
              </section>
                </div>
              
            </div>
        </div>
    );
};

export default About;