import react, {componet} from 'react';
import Input from './input';

class card extends componet{

    constructor() {
        super()

        this.state={
            color:'',
            pluralnoun:'',
        }
        
    }
    handelinputchange(){
        this.setstate({color:'red'})
    }













    render() {

        return(
            <div className="card">
            <h1>{this.state.color}</h1>
            <input/>
            </div>
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