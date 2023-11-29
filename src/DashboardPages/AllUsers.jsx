import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const AllUsers = () => {
    const AxiosSecure = UseAxiosSecure()
    const {data: Users = [] , refetch , isLoading} = useQuery({
        queryKey:  ['Users'],
        queryFn: async () => {
        const res = await AxiosSecure.get('/users')
        return res.data
        }
    })
    // console.log(Users)
    const handleMakeAdmin = user => {
            AxiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if(res.data){
                    refetch()
                    Swal.fire({
                        icon: "success",
                        title: `${user.displayName} is Admin Now `,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                }
            })
    }
  
    return (
    
        <div className="">
          <Helmet>
            <title>Momentum Daily | Admin</title>
          </Helmet>
          <div className="text-3xl font-semibold bg-[#3c6e71] text-center text-white p-5">DashBoard | All Users</div>
            <div className="max-w-6xl mx-auto my-10 bg-white">
  <table className="table  w-full">
    {/* head */}
    <thead className="bg-yellow-600">
      <tr>
        <th className="text-white font-bold text-2xl">#</th>
        <th className="text-white font-bold text-2xl">Name</th>
        <th className="text-white font-bold text-2xl">Email</th>
        <th className="text-white font-bold text-2xl">Profile Picture</th>
        <th className="text-white font-bold text-2xl">Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
      isLoading ? <MagnifyingGlass
      visible={true}
      height="800px"
      width="80%"
      
      ariaLabel="MagnifyingGlass-loading"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#e15b64'
    /> :  Users?.map((user , idx) => <tr key={user?._id}>
            <th className="text-lg font-semibold">{idx + 1}</th>
            <td className="text-lg font-semibold">{user?.displayName}</td>
            <td className="text-lg font-semibold">{user?.email}</td>
            <td><img src={user?.photoURL} alt="" className="w-16 rounded-full h-16" /></td>
            <td >{user?.role === 'Admin' ? <div  className="text-lg font-semibold bg-green-700 text-white text-center">Admin</div>
             : <button onClick={() =>handleMakeAdmin(user)}>
            <GrUserAdmin className="text-2xl"></GrUserAdmin>
                </button>}</td>
          </tr>)
      }
     
    
    </tbody>
  </table>
</div>
        </div>
   
    );
};

export default AllUsers;

