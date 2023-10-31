import { Button } from "bootstrap";
import { useState } from "react";
import red from './red.jpeg';
import black from './black.jpeg';
import Hallform from './Hallform';

let Seats = () => {
    let [SeatNo, setSeatNo] = useState([
        {
            type: 'A1',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'A2',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'A3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A6',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A7',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'A8',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'A9',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A10',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A11',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'A12',
            color1: "black",
            value1: false
        },
        {
            type: 'B1',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B2',
            color1: "black",
            value1: false, price: 100
        }, {
            type: 'B3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B6',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B7',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B8',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B9',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B10',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'B11',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'B12',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'C1',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C2',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C4',
            color1: "black",
            value1: false, price: 100
        }, {
            type: 'C5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C6',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C7',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C8',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C9',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C10',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C11',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'C12',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D1',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D2',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'S3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D6',
            color1: "black",
            value1: false, price: 100
        }, {
            type: 'D7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'D8',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D9',
            color1: "black",
            value1: false
        }, {
            type: 'D10',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D11',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'D12',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q1',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q2',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q3',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q4',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q5',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q6',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'Q7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q8',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q9',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'Q10',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q11',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q12',
            color1: "black",
            value1: false,
            price: 100

        }


    ]);

    let [SeatsNo, setSeatsNo] = useState([
        {
            type: 'F1',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'F2',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'F3',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'F4',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'F5',
            color1: "black",
            value1: true, price: 100
        },
        {
            type: 'F6',
            color1: "black",
            value1: true, price: 100
        }, {
            type: 'F7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'F8',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'F9',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'E1',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E2',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q3',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q4',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q5',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q6',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'Q7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'E3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q3',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q4',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q5',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q6',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'Q7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'E3',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E4',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'E5',
            color1: "black",
            value1: false, price: 100
        },
        {
            type: 'Q3',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q4',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q5',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'Q6',
            color1: "black",
            value1: false,
            price: 100
        }, {
            type: 'Q7',
            color1: "black",
            value1: false,
            price: 100
        },
        {
            type: 'E3',
            color1: "black",
            value1: false, price: 100
        }


    ])

    let [price1, setprice1] = useState([0]);

    let clicked = (v, i) => {
        // setaval(true);
        v.value1 = true;
        setSeatNo([...SeatNo]);
        price1.push(v.price)
    }
    let clicked1 = (v, i) => {
        // setaval(true);
        v.value1 = true;
        setSeatNo([...SeatNo]);
        price1.push(v.price)
    }
    let num = price1.length;
    let sum = price1?.reduce((total = 0, v, i) => {
        return total + v
    })
    let SeatsAval = SeatNo.map((v, i, a) => {

        return (
            <div style={{ width: "20px", height: "20px", border: "solid 1px black", padding: "10px", backgroundColor: v.value1 ? "red" : "black", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} onClick={() => clicked(v, i)}>{v.type}</div>
        )

    })

    let SeatsAvalaible = SeatsNo.map((v, i, a) => {

        return (
            <div style={{ width: "35px", height: "20px", border: "solid 1px black", padding: "11px", backgroundColor: v.value1 ? "red" : "black", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} key={i} onClick={() => clicked1(v, i)} >{v.type}</div>
        )

    })
    return (
        <div style={{ padding: "70px" }}>
            <div>
                <div style={{ display: "flex" }}>
                    <div>
                        <select>
                            <option value='Ticket Type' selected>Ticket Type</option>
                            <option>A/C</option>
                            <option>NON A/C</option>
                        </select>
                    </div>
                    <div>
                        <select style={{ width: '70px' }}>
                            <option value='city' selected>City</option>
                            <option>HYD</option>
                            <option>VIZAG</option>
                        </select>
                    </div>


                </div>
                <div style={{ color: "black" }}>
                    <h3 style={{ color: "black" }}>Key to Seat Layout:</h3>
                    <img src={red} width="20px/" height="20px" /> <span>Unavailable</span>
                    <img src={black} width="20px/" height="20px" /> <span>Available</span>
                </div>




                <div style={{ display: "grid", marginTop: "60px", border: "none", float: "left", gridTemplateColumns: '40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px', justifyContent: "space-evenly", width: "48%", gap: "20px" }}>
                    {SeatsAval}
                </div>
                <div style={{ display: "grid", marginTop: "60px", marginLeft: "1px", marginBottom: "100PX", float: "right", border: "none", gridTemplateColumns: '30px 30px 30px 30px 30px 30px', justifyContent: "space-evenly", width: "48%", gap: "10px" }}>

                    {SeatsAvalaible}</div>
            </div><br />

            <button style={{ backgroundColor: "blue", color: "white", width: "200px", height: "40px", textAlign: "center", marginLeft: "470px", marginTop: "80px", fontSize: "25px" }} onClick={() => {
                alert("You have successfully booked" + { num } + "Tickets. Enjoy the Movie");


            }}>Proceed</button>
            <span style={{ color: "red", width: "180px", marginLeft: "-20px" }}>Total Amount: {sum}</span>
        </div>
    )
}
export default Seats;