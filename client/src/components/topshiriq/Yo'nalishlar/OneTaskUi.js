import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'

const OneTaskUi = () => {
    const {taskid, id} = useParams();
    const {auth} = useSelector(state => state);
    const [oneTask, setOneTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/topshiriqlar/${id}/${taskid}`, {
            method: "GET",
            headers: {
                Authorization: auth.token,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(data => setOneTask(data.task))
        .catch(err => console.log(err));
    }, [taskid, id, auth.token, oneTask])
    
    return (
        <div>
            <Link to="/topshiriqlar" className='text-decoration-none' >
                <div className="py-3">
                    <BsArrowLeft />
                    <span className='px-2'>ortga qaytish</span>
                </div>
            </Link>
            {
                oneTask.map(val => (
                    <div className='shadow-sm p-3' key={val._id}>
                        <p className='my-2' 
                        style={{fontSize: "18px", textAlign:"center"}}>{val.content}</p>
                        <h3 className='p-3 my-4'
                        style={{background: "rgb(40, 67, 157)", color:"#fff"}}>
                            Vazifa: {val.title}
                        </h3>
                        <strong className='my-3'>
                            Agar siz bu fazifani qila olmasangiz 
                            <a href={`https://google.com/search?q=${val.title}`} target="_blank">Google sizga yodam beradi</a>
                            qo'shimcha tarzda ishlab ma'vzularni o'rganib kiyin bu topshiriqni bajarsangiz bo'ladi
                        </strong>

                        <p className='border-top border-bottom my-4 py-3'>tast bo'ladi bu yerda</p>
                        
                        <form>
                            <input type="file" className='form-control' placeholder='toshiriqni yuklash'/>
                        </form>
                        <div className='mt-3'>
                            <button className='btn btn-success' 
                            style={{float: "right"}}>
                                {val.ball}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OneTaskUi