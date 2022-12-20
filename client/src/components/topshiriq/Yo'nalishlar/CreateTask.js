import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { createTask } from '../../../redux/actions/taskAction'
import { useDispatch, useSelector } from 'react-redux'

const CreateTask = () => {
    const { auth } = useSelector(state => state)
    const task = { title: "", content: "", ball: "" }
    const [creatTask, setCreateTask] = useState(task)
    const { title, content, ball } = creatTask
    const [category, setCategory] = useState('it')
    const dispatch = useDispatch();
    const formRef = useRef();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCreateTask({ ...creatTask, [name]: value })
    }

    const handleBtn = (e) => {
        e.preventDefault();
        dispatch(createTask({ ...creatTask, category }, auth.token))
        setCreateTask(task);
    }

    return (
        <div className='shadow p-3'>
            <Link to={`/topshiriqlar/`} className='text-decoration-none' >
                <div className="py-3">
                    <BsArrowLeft />
                    <span className='px-2'>ortga qaytish</span>
                </div>
            </Link>
            <form action='/topshiriqlar/task' method='POST' ref={formRef}>
                <div className="form-group py-3">
                    <label htmlFor="inputAddress">Title</label>
                    <input type="text" className="form-control" onChange={handleInput} value={title} name="title"
                        id="inputAddress" placeholder="Tasks muammo nimadaligi" />
                </div>
                <div className="form-group py-3">
                    <label htmlFor="inputAddress2">Content</label>
                    <textarea type="text" rows="5" onChange={handleInput} value={content} name="content"
                        className="form-control" id="inputAddress2"
                        placeholder="Task haqima to'liq ma'lumot yozing" ></textarea>
                </div>
                <div className='d-flex fustify-content-between align-items-center'>
                    {/* <div className="form-row py-3"> */}
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Category</label>
                        <select onChange={(e) => setCategory(e.target.value)} id="inputState" className="form-control">
                            <option defaultValue="it" value="it">It yo'nalish</option>
                            <option value="fizika">Fizika yo'nalish</option>
                            <option value="kimyo">Kimyi yo'nalish</option>
                            <option value="math">Math yo'nalish</option>
                            <option value="dasturlash">Dasturlash yo'nalish</option>
                            dasturlash
                        </select>
                    </div>
                    {/* </div> */}
                    <div>
                        <label htmlFor="ball">Task ball</label>
                        <input id='ball' type="number" onChange={handleInput} value={ball}
                            name='ball' className='form-control' placeholder='Enter task ball only number' />
                    </div>
                </div>
                {
                    (title.length === 0 && content.length === 0 && ball.length === 0) ? "" :
                        <button onClick={handleBtn} type="submit"
                            className="btn btn-success">
                                Add task
                        </button>
                }
            </form>

        </div>
    )
}

export default CreateTask