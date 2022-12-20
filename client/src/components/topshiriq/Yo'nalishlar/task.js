import React from 'react'

const Task = () => {
    return (
        <div className='shadow p-3'>
            <form>
                <div className="form-group py-3">
                    <label htmlFor="inputAddress">Title</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Tasks muammo nimadaligi" />
                </div>
                <div className="form-group py-3">
                    <label htmlFor="inputAddress2">Content</label>
                    <textarea type="text" rows="5" className="form-control" id="inputAddress2" 
                    placeholder="Task haqima to'liq ma'lumot yozing" ></textarea>
                </div>
                <div className="form-row py-3">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Category</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option value="it">It yo'nalish</option>
                            <option value="fizika">Fizika yo'nalish</option>
                            <option value="kimyo">Kimyi yo'nalish</option>
                            <option value="math">Math yo'nalish</option>

                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>

        </div>
    )
}

export default Task