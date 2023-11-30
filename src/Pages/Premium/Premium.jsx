import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiQueenCrown } from "react-icons/gi";

const Premium = () => {
    const AxiosSecure = UseAxiosSecure()
    const {data : premium = [] , isLoading} = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await AxiosSecure.get('/allArticles')
            console.log(res.data)
            return res.data
        }

        

    })
    return (
        <div>
                 <Helmet>
            <title>Momentum Daily | Premium Articles</title>
          </Helmet>


          <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center justify-items-center gap-5 my-8">

                {
                isLoading ? <MagnifyingGlass
                visible={true}
                height="100vh"
                width="80%"
                
                ariaLabel="MagnifyingGlass-loading"
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor = '#c0efff'
                color = '#e15b64'
                /> :
    premium.map(items => <div key={items._id} > 
    {items.type === 'Premium' && items.approved === 'approved' ? (
        <div  className="card w-96 bg-[#FFF6F6] shadow-xl h-[600px]">
        <figure className="relative"><img src={items.image} alt="Shoes" /></figure>
        <div className="flex gap-3 items-center text-orange-200 animate-bounce absolute top-3 p-1 rounded-xl font-bold left-3 bg-red-600">Premium <GiQueenCrown></GiQueenCrown></div>
        <div className="card-body">
          <h2 className="card-title">{items.title}</h2>
          <p>{items.shortdescription}</p>
          <p className="text-xl font-medium">Author: <span className="font-bold">{items.author}</span></p>
          <div className="card-actions justify-end">
            <Link to={`/premiumDetails/${items._id}`}><button className="btn bg-[#7C93C3] flex text-white">Details <FaArrowRightLong></FaArrowRightLong></button></Link>
          </div>
        </div>
      </div>
             )
             :
             <>
            
             </>
    }
             </div> )

}
        </div>
        </div>
    );
};

export default Premium;