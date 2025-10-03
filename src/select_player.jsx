import { useEffect, useState } from "react";
import PlayerDiv from "./playerDiv";
import delImg from './assets/delete.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Select_player = ({count,minusCradit}) => {
    const [playr, setPlayr]=useState([]);
    const [isactive,setIsactive]=useState(true);
    const [addPlay,setaddplay]=useState([]);
    const [num,setNum]=useState(0);

    
    // useEffect(() => {
    //     setNum(num);
    //     console.log(num); // This will log the updated value after `num` changes
    // }, [num]);
    
    const addPlayer = (a) => {
        const chack = addPlay.find(at => at.id === a.id);
        

        if ((chack === undefined) && (num < 6) && (count>a.price)) {
            setNum((preNum) => preNum + 1);
            minusCradit(a.price);
            setaddplay([a, ...addPlay]);
            toast.success(`Congrats! ${a.player_name} is now in your squad`)
            // addSelectNum(a);
        } else {
            if (chack) {
                toast.error("You have already selected the player");
            }
            if (num > 5) {
                toast.warn("Can't select more Than 6 player");
            }if(count<a.price){
                toast.error("Insufficient Money",{
                    theme:"colored"
                })
            }
        }
    };
    
    // const addSelectNum=(a)=>{
        
    // }
    const delSelect=(a)=>{
        // console.log(a);
        setNum(num-1);
        const newSelect=addPlay.filter(b=>b.id!==a);
        // console.log(newSelect);
        setaddplay(newSelect);
        toast.info("Player removed")
    }
    // console.log(playr);
    // console.log(addPlay);

    
    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setPlayr(data))
    },[]);
    
// console.log(addPlay);
    return (
        <div className="relative">
            <div className="flex justify-between mx-[8rem] mb-6 mt-16">
            <div className={`${isactive?"flex":"hidden"} text-2xl font-bold`}>Available Player</div>
            <div className={`${isactive?"hidden":"flex"} text-2xl font-bold`}>Selected Player ({num}/6)</div>

            <div className="">
                <button onClick={()=>setIsactive(true)} className={`${isactive?"bg-[#E7FE29]":"bg-none"} rounded-l-lg py-2 px-4 border-2 border-[#e7e7e7] border-r-0`}>Available</button>
                <button onClick={()=>setIsactive(false)} className={`${isactive?"bg-none":"bg-[#E7FE29]"} rounded-r-lg py-2 px-4 border-2 border-[#e7e7e7] border-l-0`}>Selected ({num})</button>
            </div>
            
            </div>
            <div className={`${isactive?"flex":"hidden"} grid grid-cols-3 mx-[8rem] gap-5 `}>
                {
                    playr.map((pl,idx)=><PlayerDiv key={idx} playerD={pl} addPlayer={addPlayer}></PlayerDiv>)
                }
            </div>
            <div className={`${isactive?"hidden":"flex"} flex-col min-h-[20rem] mx-[8rem]`}>
                {
                    addPlay.map((ads,idx)=>{
                        const {id,picture,player_name, which_hand}=ads;
                        return(
                            <div key={idx}>
                                <div className=" border-2 rounded-xl p-3 flex gap-4 mb-3 relative">
                                    <div>
                                    <img className="size-20 rounded-xl" src={picture} alt="" />
                                    </div>
                                    <div className="my-auto">
                                        <h1 className="text-2xl font-bold mb-2">{player_name}</h1>
                                        <p className="opacity-60">{which_hand}</p>
                                    </div>
                                    <button onClick={()=>delSelect(id)} className="absolute right-5 top-[40%] size-4"><img src={delImg} alt="" /></button>
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={()=>setIsactive(true)} className="m p-3 rounded-md bg-[#E7FE29] size-fit">Add More Player</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

Select_player.propTypes={
    count: PropTypes.number.isRequired,
    minusCradit: PropTypes.func.isRequired
}

export default Select_player;