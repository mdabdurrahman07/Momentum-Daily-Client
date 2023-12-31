// import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiQueenCrown } from "react-icons/gi";
import { MagnifyingGlass } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";




// const getarticles = async({paramss = 0}) =>{
//     const res = publicAxios.get(`/allArticles?limit=3&offset=${ paramss }`)
//     const data = res.data
//     return {...data, prevOffset: paramss}
// }
const AllArticles = () => {
  const publicAxios = UseAxiosPublic()
  const AxiosSecure = UseAxiosSecure()
  const [data , setdata] = useState([])
  const [premium , setpremium] = useState({})
    // const {data , fetchNextPage , hasNextPage } = useInfiniteQuery({
    //     queryKey: ['articles'],
    //     queryFn:getarticles,
    //     getNextPageParam: (lastPage) => {
    //         if(lastPage.prevOffset + 5 > lastPage.articlesCount){
    //             return false
    //         }
    //         return lastPage.prevOffset + 5
          
    //     }
         
    // })
    // console.log(data)
    // const articles = data?.pages.reduce((acc , page) => {
    //     return [...acc , ...page.articles]
    // }, [])
    // console.log(articles)

    const {data : Articles = [] , isLoading} = useQuery({
        queryKey: ['Articles'],
        queryFn: async () => {
            const res = await publicAxios.get('/allArticles')
            return res.data
        }

        

    })
     useEffect(()=>{
         AxiosSecure.get('/users/premium')  
         .then(res=>{
            setdata(res.data)

         })
         .catch(error => {
            console.log(error)
         })
    },[AxiosSecure])
    useEffect(()=>{
      data?.map(items => setpremium(items))
      console.log(premium)
     },[data, premium])
     return (
        <div>
          <Helmet>
            <title>Momentum Daily | All Articles</title>
          </Helmet>
          {/* filter */}
          {/* tags */}
          {/* articles cards */}
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
                Articles.map(items => <div key={items._id} > 
                {items.type === 'Premium' && items.approved === 'approved'  ? (
                    <div  className="card w-96 bg-[#FFF6F6] shadow-xl h-[600px]">
                    <figure className="relative"><img src={items.image} alt="Shoes" /></figure>
                    <div className="flex gap-3 items-center text-orange-200 animate-bounce absolute top-3 p-1 rounded-xl font-bold left-3 bg-red-600">Premium <GiQueenCrown></GiQueenCrown></div>
                    <div className="card-body">
                      <h2 className="card-title">{items.title}</h2>
                      <p>{items.shortdescription}</p>
                      <p className="text-xl font-medium">Author: <span className="font-bold">{items.author}</span></p>
                      <div className="card-actions justify-end">
                      { premium.isPremium === true ?   <Link to={`/premiumDetails/${items._id}`}>
                          <button className="btn bg-[#7C93C3] flex text-white">Details <FaArrowRightLong></FaArrowRightLong>
                          </button></Link> :  <button className="btn bg-[#7C93C3] flex text-white">Details <FaArrowRightLong></FaArrowRightLong>
                          </button>}
                      </div>
                    </div>
                  </div>
                         )
                    :
                    
                    ( items.approved === 'approved' ? 
                        <div  className="card w-96 bg-base-100 shadow-xl h-[600px]">
                         <figure><img src={items.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{items.title}</h2>
                      <p>{items.shortdescription}</p>
                      <p className="text-xl font-medium">Author: <span className="font-bold">{items.author}</span></p>
                          <div className="card-actions justify-end">
                        <Link to={`/articlesDetails/${items._id}`}>  <button className="btn flex">Details <FaArrowRightLong></FaArrowRightLong></button></Link>
                          </div>
                        </div>
                      </div> 
                      :
                      <></>
                    )
            } 

                </div> )
            }

          </div>
        </div>
    );
};

export default AllArticles;

