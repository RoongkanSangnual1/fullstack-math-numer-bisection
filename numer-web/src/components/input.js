import { useState } from "react"
export default function Bisection(){
    const [fx,setFx]=useState()
    const[XL,setXL]=useState()
    const[XR,setXR]=useState()





    return(
        <div>
            <h1> Bisection </h1>
        <p>Input f(x)</p>
        <input type='text' className="searh-input" value={fx} onChange={(e)=>setFx(e.target.value)} ></input>
        <p>XL</p>
        <input type='number' className="searh-input" value={XL} onChange={(e)=>setXL(e.target.value)}></input>
        <p>XR</p>
        <input type='number' className="searh-input" value={XR} onchange={(e)=>setXR(e.target.value)}></input>

        <button onclick={}></button>
        </div>
        
    )
}

const handleCalculate = () => {
    // ตรวจสอบว่ามีข้อมูลครบทุก input หรือไม่
    if (fx && XL && XR) {
        // แปลงค่า XL และ XR เป็นตัวเลข
        let xl = parseFloat(XL);
        let xr = parseFloat(XR);

        // สร้างฟังก์ชัน f(x) จากข้อมูลที่ผู้ใช้กรอกเข้ามา
        const f = (x) => eval(fx); // ใช้ eval() เพื่อแปลงสตริงให้เป็นโค้ด JavaScript

        // ตรวจสอบว่าฟังก์ชัน f(x) ที่ให้มานั้นถูกต้องหรือไม่
        if (isNaN(f(xl)) || isNaN(f(xr))) {
            setResult("Invalid function f(x)");
        } else {
            // ทำการคำนวณ Bisection
            const MAX_ITERATIONS = 1000;
            const TOLERANCE = 0.000001;
            let iteration = 0;
            let xm = 0;

            while (Math.abs(xr - xl) >= TOLERANCE && iteration < MAX_ITERATIONS) {
                xm = (xl + xr) / 2;
                if (f(xm) === 0) {
                    break;
                } else if (f(xm) * f(xl) < 0) {
                    xr = xm;
                } else {
                    xl = xm;
                }
                iteration++;
            }

            setResult(`Answer: ${xm}`);
        }
    } else {
        setResult("Please fill in all fields");
    }
};