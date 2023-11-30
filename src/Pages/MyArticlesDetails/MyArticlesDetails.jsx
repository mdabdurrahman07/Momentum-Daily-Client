import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const MyArticlesDetails = () => {
    const {id} = useParams()
    console.log(id)
    
    const items = useLoaderData()
    console.log(items)
    return (
        <div>
        <Helmet>
            <title>Momentum Daily || Details</title>
        </Helmet> 

           <div className='space-y-5 my-8 p-3'>
            <div className='flex justify-center items-center'>

            <img src={items?.image} alt=""  />
            </div>
          
            <h1 className='text-4xl font-bold '>{items?.title}</h1>
            <p className='text-2xl font-medium text-left'>{items?.description}</p>
            <p className='text-3xl font-medium'><span className='text-emerald-500 mr-3 font-bold'>Publisher:</span>{items?.publisher}</p>
           </div>
    </div>
    );
};

export default MyArticlesDetails;