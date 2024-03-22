import React from 'react'

const GridItem = (props) => {
            // {/* function to remove data item */}
    function erase(){
        props.onDel(props.id - 1)
        console.log(props.id)
    }
  return (
    <div className='py-4'>
        <div className='flex justify-between rounded-md border border-slate-600 items-center lg:py-2 lg:px-3 md:py-2 md:px-3 p-1 box'>
            <div className='flex items-center'>
                <img className='rounded-full lg:h-[60px] lg:w-[60px] md:h-[60px] md:w-[60px] h-[45px] w-[45px]' src={props.image} alt='user' />
                <div className='flex flex-col lg:px-2 px-1'>
                    <h1 className='flex justify-start font-bold lg:text-[16px] md:text-[14px] text-[12px]'>{props.username}</h1>
                    <h1 className=' text-slate-600 lg:text-[14px] md:text-[12px] text-[10px]'>{props.name}</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-col items-stretch'>
                    <p className='font-bold lg:text-[14px] md:text-[12px] text-[10px]'>Chirpiness</p>
                    <p className='lg:my-2 lg:text-[14px] md:text-[12px] text-[10px]'>{props.twubric.chirpiness}</p>
                </div>
                <div className='flex-col items-stretch px-1 md:px-2 lg:px-4'>
                    <p className='font-bold lg:text-[14px] md:text-[12px] text-[10px]'>Friends</p>
                    <p className='lg:my-2 lg:text-[14px] md:text-[12px] text-[10px]'>{props.twubric.friends}</p>
                </div>
                <div className='flex-col items-stretch'>
                    <p  className='font-bold lg:text-[14px] md:text-[12px] text-[10px]'>Influence</p>
                    <p className='lg:my-2 lg:text-[14px] md:text-[12px] text-[10px]'>{props.twubric.influence}</p>
                </div>
                <div className='flex-col items-stretch px-1 md:px-2 lg:px-4'>
                    <p className='font-bold lg:text-[14px] md:text-[12px] text-[10px]'>Twubric Score</p>
                    <p className='lg:my-2 lg:text-[14px] md:text-[12px] text-[10px]'>{props.twubric.total}</p>
                </div>
            </div>
            <div>
            {/* Button to remove data item */}
                <button className='flex justify-between items-center lg:px-3 lg:py-2 md:px-3 md:py-2 p-1 border border-slate-600 rounded-md bg-red-500 hover:text-white lg:text-[14px] md:text-[12px] text-[10px]' onClick={erase}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default GridItem