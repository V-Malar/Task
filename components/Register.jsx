import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Get from './Get';
import '../assets/css/style.css';

const arr = [['01', 'JAN'], ['08', 'JAN'], ['15', 'JAN'], ['22', 'JAN'], ['29', 'JAN'], ['05', 'FEB'], ['12', 'FEB'], ['19', 'FEB'], ['26', 'FEB'], ['05', 'MAR'], ['12', 'MAR'], ['19', 'MAR'], ['26', 'MAR'], ['02', 'APR'], ['09', 'APR'], ['16', 'APR'], ['23', 'APR'], ['30', 'APR'], ['07', 'MAY'], ['14', 'MAY'], ['21', 'MAY'], ['28', 'MAY'], ['04', 'JUN'], ['11', 'JUN'], ['18', 'JUN'], ['25', 'JUN'], ['02', 'JUL'], ['09', 'JUL'], ['16', 'JUL'], ['23', 'JUL'], ['30', 'JUL'], ['06', 'AUG'], ['13', 'AUG'], ['20', 'AUG'], ['27', 'AUG'], ['03', 'SEP'], ['10', 'SEP'], ['17', 'SEP'], ['24', 'SEP'], ['01', 'OCT'], ['08', 'OCT'], ['15', 'OCT'], ['22', 'OCT'], ['29', 'OCT'], ['05', 'NOV'], ['12', 'NOV'], ['19', 'NOV'], ['26', 'NOV'], ['03', 'DEC'], ['10', 'DEC'], ['17', 'DEC'], ['24', 'DEC'], ['31', 'DEC']];
export default function Register() {
    const [details, fetchdetails] = useState([]);
    const [builds, setBuilds] = useState(false);
    const [builde, setBuilde] = useState(false);
    const [text1, setText1] = useState('Start Week');
    const [text2, setText2] = useState('End Week');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [output, setOutput] = useState([]);;
    const [classname, setclassName] = useState('none');
    useEffect(() => {
        var res = arr.slice(start, end + 1);
        setOutput(res);
    }, [start, end]);
    function handleSubmit(e) {
        e.preventDefault();
        const newObj = { duration: output.flat().join(' '), count: output.length, hours: output.length * 168, cost: parseInt(Math.random() * 100) + 1 };
        fetchdetails(prevObj => [...prevObj, newObj]);
        setclassName('outview');
    }

    return (
        <div>
            <div className="head">Role: Pursuit Manager Cost/hour: $5 View: Weekly</div>
            <div className="year"><h1>2022</h1><h1 style={{ fontSize: "3.2rem" }}>2023</h1><h1>2024</h1></div>
            <div className="move">
                <div className="numbers">
                    {
                        arr.map((val, index) => {
                            return (
                                <div key={index} className="no">
                                    {
                                        val.map((val1, index) => {
                                            return (
                                                <>
                                                    <label className="nohover">{val1}</label>
                                                    <br />
                                                </>
                                            )
                                        })}
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" onClick={() => { setBuilds(!builds); console.log(builds); }}>
                        {text1}
                    </button>
                    <div>
                        {
                            builds ?
                                arr.map((val, index) => {
                                    return (
                                        <label className="dropdown-items" key={index} onClick={() => { setText1(val); setStart(index) }}><span>{val}</span></label>
                                    )
                                })
                                : <></>
                        }
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" onClick={() => { setBuilde(!builde); console.log(builde); }}>
                        {text2}
                    </button>
                    <div>
                        {
                            builde ?
                                arr.map((val, index) => {
                                    return (

                                        <label className="dropdown-items" key={index} onClick={() => { setText2(val); setEnd(index) }}><span>{val}</span></label>
                                    )
                                })
                                : <></>
                        }
                    </div>
                </div>
                <form>
                    <input type="submit" id="submit" onClick={handleSubmit} value="SUBMIT" />
                </form>
            </div >
            <div className={classname}>
                {
                    details ? details.map((val, index) => {
                        return (
                            <div keys={index}>
                                <p><span className="thick">Duration:</span> <br />{val.duration}</p>
                                <p><span className="thick">Total Weeks</span> {val.count}</p>
                                <p><span className="thick">Hour/week</span> {val.hours} </p>
                                <p><span className="thick">Cost $ </span>{val.cost}</p>
                                <br />
                            </div>
                        )
                    }
                    )
                        : <></>
                }
                <Get val={details} />
            </div>
        </div >
    )
}