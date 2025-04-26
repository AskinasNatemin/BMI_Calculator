import React, { useState } from 'react'
import '../Styles/Bmicalculator.css'

const BmiCalculator = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [status, setStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const clear = () => {
        setHeight('')
        setWeight('')
        setErrorMessage('')
        setBmi('')
        setStatus('')
    }

   
        const handleKey=(e)=>{
            if(e.key=='Enter'){
                result()
            }            
        }
    

    const result = () => {

        if (height && weight) {
            const heightInMeters = height / 100
            const bmiValue = weight / (heightInMeters * heightInMeters)
            if (bmiValue <= 18.5) {
                setStatus('Under Weight');
            } 
            else if (bmiValue > 18.5 && bmiValue <= 24.9) {
                setStatus('Normal Weight');
            } 
            else if (bmiValue > 24.9 && bmiValue <= 29.9) {
                setStatus('Over Weight');
            } 
            else {
                setStatus('Too Much');
            }
            setBmi(bmiValue.toFixed(2))

            setErrorMessage('')
        }
        else {
            setErrorMessage('Please Enter valid Numeric values for Height and Width.')
            setBmi(null)
            setStatus('')
        }
    }

    return (
        <div className='container-fluid border d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#001F2F' }}>


            <div className="card d-flex flex-row" style={{ width: '900px', height: '500px' }}>

                <div className="imageBox w-50">

                </div>

                {/* image box over */}

                <div className="calculatorBox w-50 py-3 px-4">
                    <h3 className='text-center'>BMI CALCULATOR</h3>


                    {errorMessage && <p className='error p-3'>{errorMessage}</p>}


                    <div className="heightBox mt-2">
                        <label htmlFor="height">Height(cm)</label>
                        <input onKeyDown={handleKey} value={height} onChange={(e) => { setHeight(e.target.value) }} type="number" name="height" id="height" />
                    </div>

                    <div className="weightBox mt-3">
                        <label htmlFor="weight">Weight(kg)</label>
                        <input onKeyDown={handleKey} value={weight} type="number" onChange={(e) => { setWeight(e.target.value) }} name="weight" id="weight" />
                    </div>

                    <div className="calculateButtonBox mt-4">
                        <button onClick={result} className='px-3 py-2 rounded' type="button">Calculate BMI</button>
                        <button onClick={clear} type="button" className='px-3 py-2 rounded ms-4 '>Clear</button>
                    </div>

                    {bmi !== null && (
                        <div className="resultBox mt-4 p-3">
                            <span>Your BMI is: {bmi}</span><br />
                            <span>Status: {status}</span>
                        </div>
                    )}



                </div>
                {/* calculator box over */}

            </div>
        </div>
    )
}

export default BmiCalculator