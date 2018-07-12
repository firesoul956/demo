import react, {componet} from 'react';
import Input from './input';

class card extends componet{
    render() {
        return(
            <div classname="card">
            {Input('color')}
            </div>
        )
    }
}