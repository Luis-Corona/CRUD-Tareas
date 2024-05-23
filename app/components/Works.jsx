"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useContext } from 'react'
import { WorksContext } from '../page';

function Works() {
    const {works} = useContext(WorksContext);
    const {fetchWorks} = useContext(WorksContext);

  const handleDelete = async (workId) => {
    try {
        await axios.delete(`http://localhost:3000/api/deletework?id=${workId}`);
        alert("Tarea eliminada satisfactoriamente");
        fetchWorks();
    } catch (error) {
        console.error("Error deleting work:", error);
    }
  }

    return (
        <div className='w-auto bg-green-200 flex justify-center items-center'>
        <div className='w-full'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarea</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {works && works.length > 0 ? (
                        works.map((work, index) => (
                            <tr key={work._id} className='text-center'>
                                <td>{index + 1}</td>
                                <td>{work.work}</td>
                                <td>
                                    <Link href={`/editwork/${work._id}`}><span className='text-blue-500'>Editar</span></Link>
                                    <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(work._id)}>Eliminar</span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className='text-xl p-5 text-center font-bold'>No hay tareas</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Works
