import { useForm , Controller } from "react-hook-form";
// import Select from 'react-select';
import { LuUploadCloud } from "react-icons/lu";
import Select from 'react-select';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic'
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";



const AddArticles = () => {
  const {user} = UseAuth()
  const { register, handleSubmit , control , reset} = useForm();
  const img_hoisting_key = import.meta.env.VITE_IMG_HOSTING_KEY
  const img_hoisting_api = `https://api.imgbb.com/1/upload?key=${img_hoisting_key}`
  const  PublicAxios = UseAxiosPublic()
  const AxiosSecure = UseAxiosSecure()

  const onSubmit = async ( data) => {
    console.log('all data', data);
    const value =  data?.tags.map(items => items.value)
    
    const imageFile = {image : data?.img[0]}
    const res = await PublicAxios.post(img_hoisting_api , imageFile, {
      headers: {
          'content-type' : 'multipart/form-data'
      }
    })
    console.log(res?.data)
    if(res?.data?.success){
      const AddArticles = {
        title: data?.title,
        author: data?.author,
        publisher: data?.publisher,
        shortdescription: data?.shortdescription,
        tags: value,
        image: res?.data?.data?.display_url,
        approved : 'pending',
        type : 'normal',
        description: data?.description,
        email: user?.email,
        authorPic: user?.photoURL,
        date: new Date().toLocaleDateString()
        
      }
      const articleRes = await AxiosSecure.post('/allarticles' , AddArticles)
      console.log(articleRes?.data)
      if(articleRes?.data.insertedId){
        Swal.fire({
          
          icon: "success",
          title: "Your Article Submission Completed , Wait for the Admin Approval",
          showConfirmButton: false,
          timer: 1000
        });
        reset()
      }
    }
    
  }
    return (
      
        <div>
          <Helmet>
        <title>Momentum Daily | Add Articles</title>
       
      </Helmet>
          <h1 className="text-3xl font-semibold text-center text-[#284b63] my-4">Add Your Articles Here </h1>
        {/* add articles form  */}
          <div className="my-4">
          <form onSubmit={handleSubmit(onSubmit)} className="border-2 bg-gray-200 p-5">
          <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Article Title<span className="text-red-500">*</span></span>
                    
                </label>
                <input {...register("title" , {required : true})} type="text" required placeholder="Title" className="input input-bordered w-full" />

                </div>

                <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Article Short Description<span className="text-red-500">*</span></span>
                    
                </label>
                <input {...register("shortdescription" , {required : true})} type="text" required placeholder="Write Down Short Description" className="input input-bordered w-full" />

                </div>

                {/* text area  */}

                <div className="form-control">
              <label className="label">
              <span className="label-text text-2xl font-medium">Article Full Description<span className="text-red-500">*</span></span>
              </label>
              <textarea {...register("description" , {required : true})} className="textarea textarea-bordered h-24" placeholder="Write Down Full Description"></textarea>
              
            </div>
              {/* text area  */}
            {/* select  */}
              <div className="flex justify-between items-center">

                {/* normal select */}

              <div className="form-control w-full ">
            <label className="label">
            <span className="label-text text-2xl font-medium">Publisher<span className="text-red-500">*</span></span>
               
            </label>
            
            <select defaultValue="value" {...register('publisher' , {required : true})}
      className="select select-bordered w-full max-w-md">
        <option disabled value="value">Publisher Name</option>
        <option value="BusinessDaily">BusinessDaily</option>
        <option value="StreetJournal">StreetJournal</option>
        <option value="TechCrunch">TechCrunch</option>
        <option value="TelecomTV">TelecomTV</option>
        <option value="AndroidCentral">AndroidCentral</option>
        <option value="CNN">CNN</option>
        <option value="MarketScreener">MarketScreener</option>
        <option value="BBC">BBC</option>
      
        </select>
         
            </div>

             {/* normal select */}

              {/* react select */}
              <div className="form-control w-full ">

              <label className="label">
            <span className="label-text text-2xl font-medium">Tags<span className="text-red-500">*</span></span>
               
            </label>

            <Controller name="tags"
             control={control}
            defaultValue={null}
             render={({field}) => (

              <Select {...register('tags' , {required : true})}
               {...field} 
               options={[
                { value: "lifestyles", label: 'LifeStyles' },
                { value: "technology", label: 'Technology' },
                { value: 'foreign', label: 'Foreign' },
                { value: "business", label: 'Business' },
                { value: 'sports', label: 'Sports' },
              ]} isMulti={true}
               onChange={(selectOption) => {console.log('hello',selectOption), 
               
               field.onChange(selectOption);}}
               />

               )}>
              
            </Controller>
              </div>
           
              {/* react select */}


              </div>
                {/* select  */}

                {/* author & types */}

                <div className="flex justify-between items-center gap-5">
                {/* author */}
                <div className="form-control w-full max-w-md">
                <label className="label">
                    <span className="label-text text-2xl font-medium">Author<span className="text-red-500">*</span></span>
                    
                </label>
                <input {...register("author" , {required : true})} type="text" required placeholder="Author Name" className="input input-bordered w-full " />

                </div>
                  {/* author */}  
                {/* img */}
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text text-2xl font-medium">Upload Image<span className="text-red-500">*</span></span>
                 
                </label>
                <input {...register("img" , {required : true})} type="file" className="file-input file-input-bordered w-full max-w-md" />
                
              </div>
                {/* img */}


                </div>

           {/* author & types */}

            

            <div className="flex justify-center my-5">
            <button type="submit" className="px-10 py-3 bg-[#3c6e71] text-white font-medium text-xl flex items-center gap-4">Add Articles <LuUploadCloud /></button>
            </div>
          </form>
          </div>
           {/* add articles form  */}
        </div>
    );
};

export default AddArticles;

