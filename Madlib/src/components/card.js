import react, {componet} from 'react';
import Input from './input';

class card extends componet{

    constructor() {
        super()

        this.state={
            color:'',
            pluralnoun:'',
            adjective:'',
            celebrity: ''
        }
        this.handelinputchange= this.handelinputchange.bind(this)
        
    }
    handelinputchange(event){
        this.setstate({[event.target.name]}:event.target.value})
    }
    
    render() {

        const inputData=[
            {title:'color',state:this.state.color,name:'color'}
            {title:'plural noun',state:this.state.pluralnoun,name:'pluralnoun'}
            {title:'adjective',state:this.state.adjective,name:'adjective'}
            {title:'celebrity',state:this.state.celebrity,name:'celebrity'}

        ]
        return(
            <div classname="card">
            {
                inputData.map(data))
            }
            

            {/*Input('color',this.state.color,this.handelinputchange, color)}
            {Input('plural noun',this.state.pluralnoun,this.handelinputchange,pluralnoun)}
            {Input('adjective',this.state.adjective,this.handelinputchange, adjective)}
        {Input('celebrity',this.state.celebrity,this.handelinputchange,celebrity)*/}
            </div>
        )
    }
}