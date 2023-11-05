import React, {useState} from 'react';
import axios from "axios";

const Proba = () => {
    const [inputData, setInputData] = useState()
    const [inputDataFile, setInputDataFile] = useState([])
    const [valA1, setA1] = useState()
    const [valA2, setA2] = useState()
    const [valB1, setB1] = useState()

    const handleData = (e) => {
        if (e.target.name === "A1") {console.log("A1=", e.target.value)}
        if (e.target.name === "A2") {console.log("A2=", e.target.value)}
        if (e.target.name === "B1") {console.log("B1=", e.target.value)}
        setInputDataFile(e.target.files)
    }

    const handleSubmit = () => {
        const fD = new FormData()
        for (let i = 0; i < inputDataFile.length; i++) {
            fD.append(`file${i + 1}`, inputDataFile[i]);
        }
        for (const i of fD.entries()) {
            console.log(`${i[1].size}`)
        }
    }

    const fileHandler = async () => {
        try {
            await axios.post('/api/file', {...inputData}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="mb-6">
                <div><input
                    type="text"
                    name="A1"
                    onChange={handleData}
                /></div>
                <div><input
                    type="text"
                    name="A2"
                    onChange={handleData}
                /></div>
                <div><input
                    type="text"
                    name="B1"
                    onChange={handleData}
                /></div>
                <input type="file"
                       multiple
                       name="file"
                       onChange={handleData}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Proba;