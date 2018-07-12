import react from 'react'
import header from './header'

const Header = (title,content) =>{
    return(
        <div className="header">
            <h1>{title} </h1>
            <p>{content}</p>
        </div>
    )
}

export default header;
