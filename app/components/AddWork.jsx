"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { WorksContext } from '../page';

function AddWork() {
    const [work, setwork] = useState();
    const { fetchWorks } = useContext(WorksContext);
    const router = useRouter();

    const handleChange = (e) => {
        setwork(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (work == "") {
                alert('Por favor ingrese la tarea');
                return false;
            }
            else {
                const response = await axios.post('http://localhost:3000/api/newwork', { work: work });
                alert('Tarea añadida');
                fetchWorks();
                setwork('');
            }

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='flex w-full justify-center bg-gray-200  items-center p-10'>
            <form className='p-36 flex flex-col' onSubmit={handleSubmit}>
                <input type='text' value={work} onChange={(e) => handleChange(e)} placeholder='Añadir tarea' className='p-3 w-96 rounded-lg m-1'></input>
                <input type='submit' className='bg-black text-white cursor-pointer rounded-lg m-2 p-3' value="Añadir"></input>
            </form>
        </div>
    )
}

export default AddWork
