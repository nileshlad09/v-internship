import React, { useState, useReducer, useEffect, useContext } from 'react'
import { collection, getDocs, query, where, deleteDoc, doc, limit } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db } from "../firebase"
import Spinner from '../Components/Spinner/Spinner';
import studentContext from '../context/student/studentContext';

const Deleteold = () => {

    const context = useContext(studentContext);
    const { showAlert } = context;

    const [isLoading, setIsLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [year, setYear] = useState();
    const [refesh, forceRefresh] = useReducer(x => x + 1, 0);

    const fetchPost = async (year) => {
        if (year !== undefined) {
            await getDocs(query(collection(db, "acceptedStudents"), where("Foryear", "==", year), limit(12)))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setTodos(newData);
                    setIsLoading(false)
                }).catch((error) => {
                    showAlert("danger", "Internal error")
                    setIsLoading(false)
                });
        }

    }
    useEffect(() => {
        fetchPost(year);
        // eslint-disable-next-line 
    }, [refesh, year])

    

    const deleteAll = async (year) => {
        if (year === undefined) {
            showAlert("warning", "Please enter year in given format");
        } else if (year?.length !== 7) {
            showAlert("warning", "Invalid year");
        }
        else if (todos.length < 1) {
            showAlert("warning", "There no data avilable for given input");
        }
        else {
            setIsLoading(true)
            todos.forEach(async (todos) => {
                try {
                    const storage = getStorage();
                    await deleteDoc(doc(db, "acceptedStudents", todos.id)).then(()=>{deleteObject(ref(storage, todos.certificate))})
                    showAlert("success", `Internship data for year ${year} deleted successfully`)
                    forceRefresh();
                    setIsLoading(false)
                } catch (error) {
                    showAlert("danger", "Internal error");
                    setIsLoading(false)
                }
            })
        }
    }
    return (
        <>
            {isLoading ? <Spinner /> :
                <div className='deleteOldSection'>
                    <div className="container">
                        <div className="filter">
                            <div className="search__container ">
                                <input type="text" name='year' className="form-control search_input"
                                    onChange={(e) => setYear(e.target.value)}
                                    placeholder='ex 2022-23'
                                />
                            </div>
                            <div className=" deleteAllbtn">
                                <button className="btn btn-primary" onClick={() => deleteAll(year)}>Delete all selected data</button>
                            </div>
                        </div>

                        <section className='dataview_section'>
                            <div className="tbl-header">
                                {todos.length < 1 ? <h3 style={{textAlign:'center'}} >Noting to delete</h3> :
                                    <table  >
                                        <tbody>
                                            <tr >
                                                <th >Year</th>
                                                <th >Roll No.</th>
                                                <th >Name</th>
                                                <th >Email</th>
                                                <th >Phone</th>
                                                <th >Year</th>
                                                <th >Sem</th>
                                            </tr>



                                            {todos.map((item, i) => {
                                                return (
                                                    <tr  key={i}>
                                                        <td >{item.Foryear}</td>
                                                        <td >{item.rollNumber}</td>
                                                        <td >{item.nameofstudent}</td>
                                                        <td >{item.email}</td>
                                                        <td >{item.mobileNo}</td>
                                                        <td >{item.year}</td>
                                                        <td >{item.semester}</td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
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