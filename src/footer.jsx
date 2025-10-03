import bgImg from './assets/bg-shadow.png'
import footerImg from './assets/logo-footer.png'


const FooterF = () => {
    return (
        <div className='bg-[#06091a] relative min-h-80  mt-64'>
            <div className='mx-[8rem] mt-24 absolute top-[-15rem] w-[80%] border-2 p-4 rounded-3xl'>
            <div className="mx-auto  h-[18rem] rounded-3xl bg-white text-center flex flex-col gap-3 " style={{backgroundImage:`url(${bgImg})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <h1 className='text-2xl font-bold mt-16'>Subscribe to our Newsletter</h1>
                <p className='opacity-60 font-semibold '>Get the latest updates and news right in your inbox!</p>
                <div>
                    <input className='border-2 rounded-xl p-3 min-w-80 mr-4 text-sm' type="email" placeholder='Enter your email' name="" id="" />
                    <button className='p-3 rounded-xl bg-gradient-to-r from-[#d574ae] from-1% to-[#f6cc5b] to-99% text-sm text-black font-bold'>Subscribe</button>
                </div>
            </div>
        </div>
        <img className='mx-auto pt-52' src={footerImg} alt="" />
        <div className='flex gap-2 mx-[8rem] justify-between mt-14 text-white mb-7'>
            <div className='w-[15rem]'>
                <p>About Us</p>
                <p className='text-sm opacity-55 my-5 leading-6 '>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className='w-28'>
                <p>Quick Links</p>
                <div className='text-sm opacity-55 my-5 leading-6'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </div>
            </div>
            <div>
                <p>Subscribe</p>
                <p className='text-sm opacity-55 my-5 leading-6'>Subscribe to our newsletter for the <br /> latest updates.</p>
                <div className='flex items-center'>
                    <input className='border-2 rounded-l-xl py-1 px-3 min-w-40 h-10 text-sm' type="email" placeholder='Enter your email' name="" id="" />
                    <button className='h-10 py-1 px-3 rounded-r-xl bg-gradient-to-r from-[#d574ae] from-1% to-[#f6cc5b] to-99% text-sm text-black font-bold'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='opacity-20'/>
        <p className='text-sm opacity-55 py-7 text-white text-center'>@2024 Your Company All Rights Reserved.</p>
        </div>
        
    );
};

export default FooterF;