import { Component } from "react";
import './main.css'

class Ffun3 extends Component{
    render(){
        return(
            <div className="sty2">
            <div>
            <h2 style={{padding:'20px'}}>
                This is created using Class Component
            </h2>
            </div>
            <p>
                This is done using external CSS
            </p>
            <p style={{color:"blue"}}>
                This is done using inline CSS
            </p>

        </div>
        )
    }

}
export default Ffun3