// mport axios from "axios"
// import { useState } from "react";

// export default function Bisection() {
//     const [fx, setFx] = useState("(x^4)-13");
//     const [XL, setXL] = useState("");
//     const [XR, setXR] = useState("");
//     const [result, setResult] = useState("");
//     const [Iteration, setIteration] = useState("");
//     const [result2, setResult2] = useState("");
//     const [iterationn,setiterationn] = useState([0])


//     const handleCalculate = () => {

//         if (fx && XR && XL && Iteration) {
//             let xr = parseFloat(XR)
//             let xl = parseFloat(XL)
//             let iteration = parseFloat(Iteration)
//             let iterationnn = parseFloat(iterationn)

//             const f = (x) => eval(fx)

//             const TOLERANCE = 0.000001;
//             let xm = 0;
//             console.log("uRLLL",process.env.REACT_APP_API)
        
         

//             while (Math.abs(xr - xl) >= TOLERANCE && iterationnn < iteration) {
//                 xm = (xl + xr) / 2;
//                 if (f(xm) === 0) {
//                     setResult(xm);
//                     break;
//                 } else if (f(xm) * f(xr) >= 0) {
//                     xl = xm;
//                 } else {
//                     xr = xm;
//                 }
//                 iterationnn++;
//                 console.log(iterationnn)
//                 setResult(xm)
//                 console.log(xm)
                
//             }
            
//             setResult2(iteration)
            

//         }

//         else {
//             setResult("ใส่ข้อมูลให้ถูกต้อง")
            
//         }
//     }



//     return (
//         <div className="Bi">
//             <div>
//                 <h1>Bisection</h1>
//                 <p>Input f(x)</p>
//                 <input
//                     type="text"
//                     className="searh-input"
//                     value={fx}
//                     onChange={(e) => setFx(e.target.value)}
//                 />
//                 <p>XL</p>
//                 <input
//                     type="number"
//                     className="searh-input"
//                     value={XL}
//                     onChange={(e) => setXL(e.target.value)}
//                 />
//                 <p>XR</p>
//                 <input
//                     type="number"
//                     className="searh-input"
//                     value={XR}
//                     onChange={(e) => setXR(e.target.value)}
//                 />
//                 <p>Iteration</p>
//                 <input 
//                     type="number"
//                     className="searh-input"
//                     value={Iteration}
//                     onChange={(e) => setIteration(e.target.value)}/> 
                    
//             </div>

//             <button
//                 className="searh-button"
//                 onClick={handleCalculate}>Calculate</button>
               
//             {<p>Answer-Iteration ที่ {result2} : {result.map(data=>(data.xm))} </p>}
          
//         </div>


//     )
