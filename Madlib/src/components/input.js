import react from 'react'
import header from './header'

const Input = ({title,state, onchange,name}) =>{
    return(
        <div key={state} className="input">
            <input name ={name} value={state} onchange={onchange}/>
            <label> color </label>
        </div>
    )
}

export default Input;
