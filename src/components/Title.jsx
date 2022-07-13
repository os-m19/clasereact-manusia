import React, { useState } from 'react';


// class Title extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = { 
//         title: "Título de Tienda",
//      };

//      updateTitle () {
//         this.setState({title: "Título Cambiado"}); //set state reemplaza el state
//      }

//     render() { 
//         return (
//             <> 
//                 <h1>{this.state.title}</h1>
//                 <button onClick={() => this.updateTitle()}>Cambiar título</button>
//             </>
//         );
//     }
// }

const Title = () => {
    const [title, setTitle] = useState("Título de Tienda");
    return ( 
        <>
            <h1>{title}</h1>
            {/* <h2>{subtitle}</h2> */}
        </>
     );
}
 
export default Title;