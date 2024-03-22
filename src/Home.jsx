import React, { useEffect, useState } from 'react'
import GridItem from './components/GridItem';
import PopUp from './components/PopUp';

const Home = () => {

        const apiURL = 'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json';
        const [items, setItems] = useState([]);
        const [close, setClose] = useState(false);
        const [user, setUser] = useState([]);

        async function dataItems(){
            const res = await fetch(apiURL);
            const data = await res.json();
            setItems(data);
            setUser(data);
        }


        function remove(id){
            setItems((prev)=>{
                return prev.filter((item, index)=>{
                    return index -1 !== id; 
                })
            })
        }

        useEffect(()=>{
            dataItems();
        },[]);

  return (
    <div className='lg:w-10/12 md:w-10/12 w-11/12 mx-auto'>
        <header className='py-5 my-[35px]'>
        <h1 className='text-3xl font-extrabold'>Twubric App</h1>
        </header>
        <div className='flex justify-between items-center px-3 py-2 border border-slate-600 rounded-md box {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);'>
            <h1 className='text-l font-bold'>User List</h1>
            <button onClick={() => setClose(true)} className='text-l font-bold rounded-md border border-slate-600 p-2'>Filter</button>
        </div>
        <PopUp items = {items} setItems = {setItems} trigger={close} setTrigger={setClose} user = {user} />
        {/*To show a single data item */}
        <div>
        {
            items.map((item, index)=>(
                <GridItem
                    name={item.fullname}
                    username = {item.username}
                    image = {item.image}
                    twubric = {item.twubric}
                    key = {index}
                    onDel = {remove}
                    id = {index}
                    />
            ))
        }
        </div>
    </div>
  )
}

export default Home