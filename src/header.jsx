import headerLimg from './assets/logo.png'
import coinImg from './assets/coin.png'
import bgImg from './assets/bg-shadow.png'
import bannerImg from './assets/banner-main.png'
import PropTypes from 'prop-types';

const HeaderR = ({addCradit,count}) => {
    return (
        <header className=' mt-36'>
        <div className='flex justify-between w-full py-4 fixed top-0  backdrop-blur-md bg-white bg-opacity-40 z-10 px-[8rem]'>
          
            <img src={headerLimg} alt="" />
            <div className='flex items-center gap-10'>     
              <a href="">Home</a>
              <a href="">Fixture</a>
              <a href="">Teams</a>
              <a href="">Schedules</a>
              <button className='py-3 px-4 rounded-xl border-2 border-[#e7e7e7] flex'>{count} Coin<img className='size-6 ml-2' src={coinImg} alt="" /></button>
            </div>
          </div>
          <div className=' h-[29rem] rounded-3xl bg-black text-center mx-[8rem] pt-12 flex flex-col gap-5' style={{backgroundImage:`url(${bgImg})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <img className='mx-auto' src={bannerImg} alt="" />
            <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[#ffffffb7] text-lg font-medium'>Beyond Boundaries Beyond Limits</p>
            <button onClick={()=>addCradit()} className='p-[0.3rem] rounded-xl border-2 border-[#E7FE29] w-fit mx-auto'><div className='bg-[#E7FE29] py-2 px-4 rounded-xl font-bold text-sm'>Claim Free Credit</div></button>
          </div>
          
          
        </header> 
    );
};

HeaderR.propTypes={
  count: PropTypes.number.isRequired,
  addCradit: PropTypes.func.isRequired
}

export default HeaderR;