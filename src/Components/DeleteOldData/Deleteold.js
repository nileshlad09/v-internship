import React, { useState, useReducer,useEffect } from 'react'
import './deleteOld.css'
import { collection, getDocs, query, where,deleteDoc, doc, limit } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../../firebase"
import Spinner from '../Spinner/Spinner';
const Deleteold = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [year, setYear] = useState();
    const [refesh, forceRefresh] = useReducer(x => x + 1, 0);

    const fetchPost = async (year) => {
        await getDocs(query(collection(db, "acceptedStudents"), where("Foryear", "==", year), limit(10)))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data() ,id: doc.id}));
                setTodos(newData);
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchPost(year);
    }, [refesh,year])

    const reject = async (item) => {
        setIsLoading(true);
       const storage = getStorage();
       const desertRef = ref(storage, item.certificate);
       await deleteObject(desertRef).then(() => {
            deleteDoc(doc(db, "acceptedStudents", item.id ? item.id : item.eid))  
            forceRefresh();
        })
    }
    const handleClick=(year)=>{
        setIsLoading(true);
        fetchPost(year)
    }
    return (
<>
{isLoading? <Spinner/>:
        <div className='deleteOldSection'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="col-md-5 dataEnter_input dataoldInput ">
                            <input type="text" name='year' className="form-control" 
                                onChange={(e)=>setYear(e.target.value)}
                                placeholder='ex 2022-23'
                            />
                            <button className="btn btn-primary" onClick={() =>handleClick(year)}>Search</button>
                        </div>
                    </div>
                </div>




                <section className='dataview_section'>
                    <div className="tbl-header">
                    {todos.length<1?<h3 style={{textAlign:"center"}}>Noting to delete</h3>:
                             <table  >
                            <tr >
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Year</th>
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Roll No.</th>
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Name</th>
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Email</th>
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}>Phone</th>
                                <th style={{ textAlign: "center", backgroundColor: "orangered" }}></th>
                            </tr>


                            
                            {todos.map((item, i) => {
                                return (
                                    <tr style={{ backgroundColor: "#000000ba" }} key={i}>
                                        <td style={{ textAlign: "center" }}>{item.Foryear}</td>
                                        <td style={{ textAlign: "center" }}>{item.rollNumber}</td>
                                        <td style={{ textAlign: "center" }}>{item.nameofstudent}</td>
                                        <td style={{ textAlign: "center" }}>{item.email}</td>
                                        <td style={{ textAlign: "center" }}>{item.mobileNo}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn btn-primary" onClick={()=>reject(item)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }

                        </table>
 } </div>
                </section>
            </div>
        </div>
        }
        </>
    )
}

export default Deleteold