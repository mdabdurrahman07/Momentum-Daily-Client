import { Typewriter } from "react-simple-typewriter";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Stat = () => {
  const AxiosPublic = UseAxiosPublic()
  const {data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await
        AxiosPublic.get('/users/all')
        // console.log(res.data)
        return res?.data
           }
  })
 
    return (
        <div className="my-5">
             <div className="font-semibold text-4xl text-[#3c6e71] p-3 mb-6 text-center">
            <Typewriter
            words={['Our Statistics']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
          </div>
            <div className="stats shadow w-full bg-slate-200">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      {/* logo */}
    </div>
    <div className="stat-title">All Users</div>
    <div className="stat-value">{users?.length}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     {/* logo */}
    </div>
    <div className="stat-title">Premium Users</div>
    <div className="stat-value">4</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     {/* logo */}
    </div>
    <div className="stat-title">Normal User</div>
    <div className="stat-value">5</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Stat;