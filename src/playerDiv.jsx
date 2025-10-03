import PropTypes from 'prop-types';
import userImg from './assets/user.png'
import flagImg from './assets/flag.png'

const PlayerDiv = ({ playerD,addPlayer }) => {
    // console.log(playerD);
    const {picture,player_name,country,type, which_hand, price}=playerD;
    
    return (
        <div className='border-2 rounded-2xl p-4 flex flex-col gap-2'>
            <div style={{backgroundImage:`url(${picture})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-[13rem] rounded-2xl'>
            {/* <img className='h-[17rem] object-cover' src={picture} alt="" /> */}
            </div>
            <h1 className='text-xl font-bold my-2'><img className='size-6 inline mr-2' src={userImg} alt="" />{player_name}</h1>
            <div className='flex justify-between items-center'>
            <p className='text-[#13131380]'><img className='size-6 inline opacity-50' src={flagImg} alt="" />  {country}</p>
            <button className='text-sm px-3 py-2 rounded-lg  bg-[#1313130f]'>{type}</button>
            </div>
            <hr />
            <p className='font-bold'>Rating</p>
            <div className='flex justify-between items-center'>
            <p className='font-bold'>{which_hand}</p>
            <p className='opacity-40'>{which_hand}</p>
            </div>
            <div className='flex justify-between items-center'>
            <p className='font-bold'>Price: ${price}</p>
            <button onClick={()=>addPlayer(playerD)} className='text-sm px-3 py-2 rounded-lg border-2 w-fit'>Choose Player</button>
            </div>
        </div>
    );
};

PlayerDiv.propTypes={
    playerD: PropTypes.object.isRequired,
    addPlayer: PropTypes.func.isRequired
}
export default PlayerDiv;