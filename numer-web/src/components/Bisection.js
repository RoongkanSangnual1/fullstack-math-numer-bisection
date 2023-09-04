import axios from "axios"
import { useState } from "react";

export default function Bisection() {
    const [fx, setFx] = useState("(x^4)-13");
    const [XL, setXL] = useState("");
    const [XR, setXR] = useState("");
    const [result, setResult] = useState([]);
    const [resultXl, setResultXl] = useState([]);
    const [resultXr, setResultXr] = useState([]);
    const [Iteration, setIteration] = useState("");


    const handleCalculate = () => {

        if (fx && XR && XL && Iteration) {
            let xr = parseFloat(XR)
            let xl = parseFloat(XL)
            let iteration = parseFloat(Iteration)


            const f = (x) => eval(fx)

            const TOLERANCE = 0.000001;
            let xm = 0;
            let iterationnn = 0;
            const loopxm = [] ;
            const loopxl = [];
            const loopxr = [];
          //  console.log("uRLLL",process.env.REACT_APP_API)
        
            // axios.post(`${process.env.REACT_APP_API}/bi`,{XR,XL,xm,Iteration}).then(
            //     response => {
            //         alert("บันทึก")
            //     }
            // ).catch(err=>{
            //     alert("บันทึกไม่ได้")
            // })

            while (Math.abs(xr - xl) >= TOLERANCE && iterationnn < iteration) {
                xm = (xl + xr) / 2;
                loopxm.push(xm)
                loopxl.push(xl)
                loopxr.push(xr)
                if (f(xm) === 0) {
                
                    break;
                } else if (f(xm) * f(xr) >= 0) {
                    xl = xm;
                } else {
                    xr = xm;
                }
                
                iterationnn++; 
            }
            setResult(loopxm);
            setResultXl(loopxl)
            setResultXr(loopxr)
            console.log(loopxm)
            console.log(loopxr)
            console.log(loopxl)
        }

        else {
            setResult("ใส่ข้อมูลให้ถูกต้อง")
            
        }
    }



    return (
        <div className="Bi">
            <div>
                <h1>Bisection</h1>
                <p>Input f(x)</p>
                <input
                    type="text"
                    className="searh-input"
                    value={fx}
                    onChange={(e) => setFx(e.target.value)}
                />
                <p>XL</p>
                <input
                    type="number"
                    className="searh-input"
                    value={XL}
                    onChange={(e) => setXL(e.target.value)}
                />
                <p>XR</p>
                <input
                    type="number"
                    className="searh-input"
                    value={XR}
                    onChange={(e) => setXR(e.target.value)}
                />
                <p>Iteration</p>
                <input 
                    type="number"
                    className="searh-input"
                    value={Iteration}
                    onChange={(e) => setIteration(e.target.value)}/> 
                    
            </div>

            <button
                className="searh-button"
                onClick={handleCalculate}>Calculate</button>
             {<p>
  {result.map((xm, index) => (
    <span key={index}>
      {`Iteration ที่ ${index + 1} : XM = ${result[index]}, | XL  = ${resultXl[index]} | XR = ${resultXr[index]}`} <br />
    </span>
  ))}
</p>}

          
        </div>


    )
}