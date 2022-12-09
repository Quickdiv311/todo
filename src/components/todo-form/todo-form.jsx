import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../reducers/todoReducer';
import './todo-form.css';

function TodoForm()
{
   const [value, setValue] = useState("");
   const dispatch = useDispatch();

    return(
        <div className="form-container">
            <form action="">
                <input type="text" value={value} onInput={(e) => setValue(e.target.value)} className="form-control" />
                <button type="submit" className="btn btn-success float-end mt-3" onClick={() => {dispatch(add(value))}}>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;