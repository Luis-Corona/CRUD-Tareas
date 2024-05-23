"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function AddWork({ params }) {
  const { id } = useParams();
  const [work, setWork] = useState([]);

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/getwork?id=${id}`, { id: id });
      setWork(response.data.work);
    } catch (error) {
      console.error("Error fetching works:", error);
    }
  }
  const router = useRouter();

  const handleChange = (e) => {
    setWork(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (work == "") {
        alert('Please enter work');
        return false;
      }
      else{
        const response = await axios.post(`http://localhost:3000/api/updatework?id=${id}`, { work: work });
        alert('Tarea actualizada');
        setWork('');
        router.push('/');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='flex w-full justify-center bg-gray-200 h-screen items-center p-10'>
      <form className='p-36 flex flex-col' onSubmit={handleSubmit}>
        <input type='text' value={work} onChange={(e) => handleChange(e)} placeholder='Actualizar tarea...' className='p-3 w-96 rounded-lg m-1'></input>
        <input type='submit' className='bg-black text-white cursor-pointer rounded-lg m-2 p-3' value="Actualizar tarea"></input>
      </form>
    </div>
  )
}

export default AddWork
