import react, {componet} from 'react';
import Input from './input';

class card extends componet{

    constructor() {
        super()

        this.state={
            color:'',
            pluralnoun:'',
        }
        this.handelinputchange= this.handelinputchange.bind(this)
        
    }
    handelinputchange(event){
        this.setstate({color:event.target.value})
    }
    render() {

        return(
            <div className="card">
            <h1>{this.state.color}</h1>
            <input onChange={() => this.handelinputchange(event)}/>
            </div >
        );
        
        return(
            <div classname="card">
            {this.state.color}
            {Input('color')}
            {Input('plural noun')}
            
            </div>
        )
    }
}