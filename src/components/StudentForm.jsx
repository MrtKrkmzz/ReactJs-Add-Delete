import React, { useState } from 'react'
const StudentForm = ({ setData }) => {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [number,setNumber]=useState("")
    const submitHandler = (event)=>{
        event.preventDefault();
        const studentData = 
            {
                id: Math.floor(Math.random()*10000),
                name,
                lastName,
                number,
                
            }
         
        
        setData(current => [...current, studentData]);
    }
  return (
    <form style={{display:"flex",flexDirection:"column",width:"30%",margin:"auto"}} onSubmit={submitHandler}>
        <label>Öğrenci Adı</label>
        <input type="text" placeholder='Öğrenci Adı Giriniz' onChange={(e)=>{setName(e.target.value)}}/>
        <label>Öğrenci Soyadı</label>
        <input type="text" placeholder='Öğrenci Adı Giriniz' onChange={(e)=>{setLastName(e.target.value)}}/>
        <label>Öğrenci Numarası</label>
        <input type="number" placeholder='Öğrenci Adı Giriniz' onChange={(e)=>{setNumber(e.target.value)}}/>
        <button>Ekle</button>
    </form>
  )
}

export default StudentForm



