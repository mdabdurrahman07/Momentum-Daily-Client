import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from "react-simple-typewriter";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Trending = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const handleResize = () => {
          
          if (window.innerWidth <= 600) {
            setSlidesPerView(1);
          } else {
            setSlidesPerView(3);
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const axiosPublic = UseAxiosPublic()
    const [data , setData] = useState([])
    useEffect(()=>{
        axiosPublic.get('/allarticles')
        .then(res=>{
            setData(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[axiosPublic])
    // filtering top-6 articles based on views 
    const topArticles = data.filter(articles => articles.views).sort((a,b)=> b.views - a.views).slice(0,6)
    
    return (
        <div>
              <div className="font-semibold text-4xl text-[#3c6e71] p-3 text-center mb-3">
            <Typewriter
            words={['Trending Articles']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
            </div>
            <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
    
       
         {
                topArticles.map(article => <SwiperSlide key={article._id}>
                    <div  className="w-96 h-[500px] bg-[#F3EEEA] drop-shadow-xl">
                <figure><img src={article.image} alt="articles"  /></figure>
                <p className="flex gap-3 items-center bg-black text-white w-14  absolute top-2 right-3 animate-pulse"><FaEye></FaEye> {article.views}</p>
                <div className="card-body">
                    <h2 className="card-title">
                    {article.title.slice(0,41)}
                    <div className="badge badge-secondary">Trending</div>
                    </h2>
                    <p>{article.shortdescription.slice(0,100)}</p>
                    
                </div>
                </div>
                </SwiperSlide>)
            }
       
      
       </Swiper>
        
        </div>
    );
};

export default Trending;
