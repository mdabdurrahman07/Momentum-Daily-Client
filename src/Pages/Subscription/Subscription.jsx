import Plans from '../../Components/Plans/Plans';
import bg from '../../assets/bg/confident-3082818_1920.jpg'

const Subscription = () => {
    return (
        <div>
           <div className="flex bg-[#427D9D]    gap-7">
                <section className='flex-1 '>
                <img src={bg} alt="" className=' ' />
                </section>
                   <section className='flex-1 space-y-4'>
                        <h1 className='text-left font-bold text-white text-3xl'>
                        Benefits of Online Payments</h1>
                        <p className='text-xl font-medium text-slate-100'>Online payments provide unparalleled convenience, allowing transactions 24/7 from any location. The speed of processing transactions is a notable advantage, reducing the time and effort required for both consumers and businesses.Breaking down geographical barriers, online payments grant businesses a global reach. Users can choose from various payment methods, such as credit/debit cards, digital wallets, and bank transfers, enhancing accessibility.Secure protocols and encryption technologies safeguard sensitive information during online transactions. Fraud protection measures are commonly integrated into online payment systems to prevent unauthorized transactions.</p>
                        <button className='px-6 py-2  bg-lime-500 text-white rounded-lg'> Learn More</button>
                   </section>
                
           </div>

           <div>
            <Plans></Plans>
           </div>
        </div>
    );
};

export default Subscription;