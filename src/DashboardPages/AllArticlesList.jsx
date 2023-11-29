import { Helmet } from "react-helmet";
import UseAxiosSecure from '../Hooks/UseAxiosSecure'
import { useQuery } from "@tanstack/react-query";
import { MagnifyingGlass } from "react-loader-spinner";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { GiImperialCrown } from "react-icons/gi";
import Swal from "sweetalert2";


const AllArticlesList = () => {
  const AxiosSecure = UseAxiosSecure()
  const {data: article = [] , isLoading , refetch} = useQuery({
    queryKey: ['article'],
    queryFn: async () =>{
    const res = await  AxiosSecure.get('/allarticles')
    return res.data

    }
    
  })
  // console.log(article)
//  approving the article
  const handleUpdateStatus =  (values) => {
    AxiosSecure.put(`/allarticles/updateStatus/${values._id}`)
    .then(res=>{
      console.log(res?.data)
      if(res?.data?.modifiedCount > 0){
        refetch()
        Swal.fire({
          
          icon: "success",
          title: 'Your Article is Approved',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  // declining the articles
  const handleDecline =  (e , id) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const reason = form.get('reason');
    console.log(reason)
    AxiosSecure.put(`/allarticles/declineStatus/${id}` ,{reason})
    .then(res =>{
      console.log(res.data)
    })
    .catch(error =>{
      console.log(error)
    })


  }
  // delete articles 
const handleDelete = (values) => {
  AxiosSecure.delete(`/allarticles/${values._id}`)
  .then(res =>{
    console.log(res.data)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    if(res.data.deletedCount > 0 ){
      refetch()
      Swal.fire({
        title: "Deleted!",
        text: "Article Deleted",
        icon: "success"
      });
    }
   
  }
});
    
  })
  .catch(error =>{
    console.log(error)
  })

  }
  // handle premium 


  const handleMakePremium = (values) => {
    AxiosSecure.put(`/allarticles/premium/${values._id}`)
    .then(res =>{
      console.log(res.data)
      if(res?.data?.modifiedCount > 0){
        refetch()
        Swal.fire({
          
          icon: "success",
          title: 'Your Article is Premium Now',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch(error =>{
      console.log(error)
    })
  }
  

     
  
    return (
        <div>
             <Helmet>
            <title>Momentum Daily | Admin</title>
          </Helmet>
          <div className="text-3xl font-semibold bg-[#3c6e71] text-center text-white p-5">DashBoard | All Article List</div>
          <div className="py-7 px-2">
          <div className="overflow-x-auto bg-white">
  <table className="table table-xs w-full">
    <thead className="bg-[#CA8A04] p-3">
      <tr>
        <th className="text-white text-xl font-bold">#</th> 
        <th className="text-white text-xl font-bold">Article Title</th> 
        <th className="text-white text-xl font-bold">Author Name</th> 
        <th className="text-white text-xl font-bold">Author Email</th> 
        <th className="text-white text-xl font-bold">Author Img</th> 
        <th className="text-white text-xl font-bold">Posted Date</th> 
        <th className="text-white text-xl font-bold">Status</th>
        <th className="text-white text-xl font-bold">Publisher</th>
        <th className="text-white text-xl font-bold">Approve</th>
        <th className="text-white text-xl font-bold">Decline</th>
        <th className="text-white text-xl font-bold">Delete</th>
        <th className="text-white text-xl font-bold">Make Premium</th>
      </tr>
    </thead> 
    <tbody>
     { isLoading ?  <MagnifyingGlass
      visible={true}
      height="800px"
      width="80%"
      
      ariaLabel="MagnifyingGlass-loading"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#e15b64'
    /> :
      article?.map((values , idx) =>
        <tr key={values._id}>
        <th className="text-lg font-medium">{idx +1}</th> 
        <td className="text-lg font-medium">{values?.title}</td> 
        <td className="text-lg font-medium">{values?.author}</td> 
        <td className="text-lg font-medium">{values?.email}</td> 
        <td><img src={values?.authorPic} className="w-12 h-12 rounded-full" /></td> 
        <td className="text-lg font-medium">{values?.date}</td> 
        <td className="text-lg font-medium">{values?.approved}</td>
        <td className="text-lg font-medium">{values?.publisher}</td>
        <td>
            
          <button onClick={() => handleUpdateStatus(values)}>
            <GrStatusGood className="text-blue-500 font-bold text-3xl ml-5">

          </GrStatusGood>
          </button>
        </td>
        <td>
            
        <button  onClick={()=>document.getElementById('my_modal_3').showModal()}>
           <RxCrossCircled className="text-orange-500 font-bold text-3xl ml-5">
            </RxCrossCircled></button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 className="font-bold text-lg text-center">Write The reason for Declination</h3>
              <form  onSubmit={(e) => handleDecline(e , values._id)}>
          <div className="flex justify-center my-4">
            <textarea className="textarea textarea-bordered" name="reason" placeholder="Write Here the Problems Briefly"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-1 bg-[#284b63] text-white text-lg font-medium rounded-xl">Send</button>
          </div>
        </form>
            </div>
          </dialog>
        </td>
        <td className="text-lg font-medium">
            <button onClick={()=>handleDelete(values)} ><MdDelete className="text-red-500 font-bold text-3xl ml-5"></MdDelete>
          </button>
          </td>
        <td className="text-lg font-medium">
         { values.type === 'Premium' ? <div  className="text-lg font-semibold bg-pink-700 text-white text-center">Premium</div>  : <button onClick={() => handleMakePremium(values)}>
           
           
            <GiImperialCrown className="text-green-500 font-bold text-3xl ml-5">

          </GiImperialCrown>
          </button>}
          
          </td>
      </tr>)
     }
      
    </tbody> 
    
  </table>
</div>
          </div>
        </div>
    );
};

export default AllArticlesList;


