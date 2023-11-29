import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { GrDocumentUpdate } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";


const MyArticles = () => {
    const {user} = UseAuth()
    const AxiosSecure = UseAxiosSecure()
    const {data: myarticles = [{}] , isLoading , refetch} = useQuery({

        queryKey: ['myarticles'],
        queryFn: async () =>{
            const res = await AxiosSecure.get(`http://localhost:5000/allarticles/myarticles?email=${user?.email}`)
            console.log(res?.data)
            return res?.data
        }

    })
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
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-lg font-medium" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
<dialog id="my_modal_1" className="modal">
<div className="modal-box">
<img src={items?.image} alt="" />
<p className="font-semibold text-lg mt-2">Description</p>
<p className="py-2">{items?.description}</p>
<p className="text-lg font-semibold"><span className="text-green-500 mr-3">Publisher</span>{items?.publisher}</p>
<div className="modal-action">
<form method="dialog">
{/* if there is a button in form, it will close the modal */}
<button className="btn">Close</button>
</form>
</div>
</div>
</dialog>
</td>
<td className="text-lg font-medium">{items?.approved}</td>
<td className="text-lg font-medium">{items?.type === 'normal' ? 'No' : items?.type}</td>
<td className="text-lg font-medium">
    <button>
        <GrDocumentUpdate className="text-2xl font-medium text-blue-500">

        </GrDocumentUpdate>
    </button></td>
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

