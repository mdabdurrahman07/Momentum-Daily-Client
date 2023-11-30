import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { GrDocumentUpdate } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";



const MyArticles = () => {
    
    const {user} = UseAuth()
    const AxiosSecure = UseAxiosSecure()
    const {data: myarticles = [{}] , isLoading , refetch} = useQuery({

        queryKey: ['myarticles'],
        queryFn: async () =>{
            const res = await AxiosSecure.get(`https://momentum-daily-server.vercel.app/allarticles/myarticles?email=${user?.email}`)
            console.log(res?.data)
            return res?.data
        }

    })
    
    // my article delete
    const handleDelete =  id  => {

        AxiosSecure.delete(`/allarticles/myarticles/${id}`)
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
                        text: "Your Article has been deleted.",
                        icon: "success"
                      });
                  }
                }
              });
        })


    }
    
    return (
        <div>
          <Helmet>
            <title>
                Momentum Daily | My Articles
            </title>
            </Helmet> 

            
            <div className="p-5 my-5">
<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead className="bg-[#2D9596] text-white p-3">
<tr>
<th className="text-xl font-bold text-white">Sl No</th>
<th className="text-xl font-bold text-white">Title</th>
<th className="text-xl font-bold text-white">Details</th>
<th className="text-xl font-bold text-white">Status</th>
<th className="text-xl font-bold text-white">Is Premium</th>
<th className="text-xl font-bold text-white">Update</th>
<th className="text-xl font-bold text-white">Delete</th>
</tr>
</thead>
<tbody>
{/* row 1 */}
{ isLoading ? <MagnifyingGlass
visible={true}
height="100vh"
width="80%"

ariaLabel="MagnifyingGlass-loading"
wrapperClass="MagnifyingGlass-wrapper"
glassColor = '#c0efff'
color = '#e15b64'
/> :
myarticles.map((items , idx) =>   <tr key={items._id}>
<th className="text-lg font-medium">{idx + 1}</th>
<td className="text-lg font-medium">{items?.title}</td>
<td >
   
            <Link to={`/myarticles/details/${items._id}`}>
            <button className="text-lg font-medium bg-violet-500 rounded-xl text-white px-5 py-1"
            >Details</button>
            </Link>

</td>
<td className="text-lg font-medium">{items?.approved === 'declined' ?  <>

        <span className="text-red-500">{items?.approved}</span>

<button className="btn ml-2" onClick={()=>document.getElementById('my_modal_2').showModal()}>Reason</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Reason of Declination</h3>
    <p className="py-4 text-yellow-500 flex justify-center text-xl">{items?.reason}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button  className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


</>  : items?.approved }</td>
<td className="text-lg font-medium">{items?.type === 'normal' ? 'No' : 'yes'}</td>
<td className="text-lg font-medium">
   <Link to={`/updateDetails/${items._id}`}>
   <button>
        <GrDocumentUpdate className="text-2xl font-medium text-blue-500">

        </GrDocumentUpdate>
    </button>
   </Link></td>
<td className="text-lg font-medium">
    <button onClick={() => handleDelete(items?._id)}>
        <MdDeleteForever className="text-2xl font-medium text-red-500">

        </MdDeleteForever>
    </button>
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

export default MyArticles;
    {/* <div>
   <h1 className="text-3xl font-semibold my-20 text-center">Sorry No Article is Available Of Yours , Go to <Link  className="text-blue-500" to="/addArticles">Add Articles</Link></h1> .
     </div> */}

