import { Helmet } from "react-helmet";

const AdminHome = () => {
    return (
        <div>
             <Helmet>
            <title>Momentum Daily | Admin</title>
          </Helmet>
          <div className="text-3xl font-semibold bg-[#3c6e71] text-center text-white p-5">DashBoard | Admin Home</div>
        </div>
    );
};

export default AdminHome;