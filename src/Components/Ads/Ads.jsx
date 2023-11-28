import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import img1 from '../../assets/ads/C.jpg'
import img2 from '../../assets/ads/N.jpg'
import img3 from '../../assets/ads/S.jpg'
const Ads = () => {
    return (
        <div>
            <Carousel autoPlay={true} showThumbs={false}>
            <div>
                    <img src={img1} />
                   
                </div>
            <div>
                    <img src={img2} />
                   
                </div>
            <div>
                    <img src={img3} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Ads;