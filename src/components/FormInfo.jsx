import React, { useState } from "react";
import StudentForm from "./StudentForm";

const FormInfo = () => {
  const [data, setData] = useState([]);

  const deleteHandler=(id)=>{
    setData(data.filter(i => i.id !== id))
  }
  return (
    <>
   
     
     <StudentForm setData={setData} />
   
    
   <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
       {
        data.map(item=>(
         <div key={item.id} style={{width:"250px",height:"150px",textAlign:"center",margin:"100px",marginBottom:"150px"}}>
            <img style={{width:"100%",height:"175px"}} src={"https://previews.123rf.com/images/yupiramos/yupiramos1608/yupiramos160822352/61769247-boy-student-graduation-icon-vector-illustration-design.jpg"} alt=""/>
            <div style={{backgroundColor:"orange"}}>
            <h1>Öğrenci Adı</h1>
            <p style={{fontFamily:"fantasy",fontSize:"25px",color:"blue"}}>{item.name}</p>
            <h1>Öğrenci Soyadı</h1>
            <p style={{fontFamily:"fantasy",fontSize:"25px",color:"blue"}}>{item.lastName}</p>
            <h1>Öğrenci Numarası</h1>
            <p style={{fontFamily:"fantasy",fontSize:"25px",color:"blue"}}>{item.number}</p>
            <button onClick={()=>deleteHandler(item.id)} style={{borderRadius:"50%",width:"25px",padding:"5px",margin:"5px",backgroundColor:"red",cursor:"pointer"}}>X</button>
            </div>
         </div>

        ))
       }
   </div>
   </>
  );
};

export default FormInfo;
