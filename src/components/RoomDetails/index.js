import { useState } from 'react';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from "uuid"
import img1 from "../../images/img1.jpg"
import BookingContext from "../../context/BookingContext.js"
import "./index.css"

const RoomDetails = () => {
    const [showCards, setShowCard] = useState(true)
    const [bookList, setBookList] = useState([])
    const [userInfo, setUserInfo] = useState({
        name: "satish",
        email: "",
        street: "",
        pincode: "",
        city: "",
        country: "",
        expires: "",
        cvc: "",
        cardNumber: ""
    });

    const onClickPayNow = () => {
        const validation = (userInfo.cardNumber !== "") && (userInfo.cvc !== "") && (userInfo.expires !== "")
        if (validation) {
            const userDetails = {
                name: userInfo.name,
                email: userInfo.email,
                street: userInfo.street,
                pincode: userInfo.pincode,
                city: userInfo.city,
                country: userInfo.country,
                cardNumber: userInfo.cardNumber,
                cvc: userInfo.cvc,
                expires: userInfo.expires
            }

            setBookList([...bookList, userDetails])
            setUserInfo({
                name: "satish",
                id: uuidv4(),
                email: "",
                street: "",
                pincode: "",
                city: "",
                country: "",
                expires: "",
                cvc: "",
                cardNumber: ""
            })

            setShowCard(true)

        }

    }


    const onClickInfo = (e) => {
        e.preventDefault()
        const validation = (userInfo.email !== "") && (userInfo.street !== "") && (userInfo.pincode !== "") && (userInfo.city !== "") && (userInfo.country !== "")
        if (validation) {
            setShowCard(false)
        }
    }

    return (
        <BookingContext.Consumer>
            {value => {
                const { bookList } = value
                return (
                    <div className="room-details-container">
                        <div className="room-details-card">
                            <img src={img1} />
                            <div className='form-cont'>
                                <h1>Booking Details</h1>
                                <p>Name: <span>26-06-2021</span></p>
                                <p>From Date: <span>26-06-2021</span></p>
                                <p>To Date: <span>satish</span></p>
                                <h1>Amount</h1>
                                <p>Total Days: <span>3</span></p>
                                <p>Rent Per Day: <span>4500/-</span></p>
                                <Popup trigger={<button >Pay Now</button>} modal className='pp'>
                                    {close => (
                                        <div className='pop-div'>
                                            <form >
                                                {showCards ? (<div>
                                                    <input type='email' placeholder='Email' value={userInfo.email} onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
                                                    <input type='text' placeholder='Street' value={userInfo.street} onChange={e => setUserInfo({ ...userInfo, street: e.target.value })} />
                                                    <input type='text' placeholder='Pincode' value={userInfo.pincode} onChange={e => setUserInfo({ ...userInfo, pincode: e.target.value })} />
                                                    <input type='text' placeholder='City' value={userInfo.city} onChange={e => setUserInfo({ ...userInfo, city: e.target.value })} />
                                                    <input type='text' placeholder='Country' value={userInfo.country} onChange={e => setUserInfo({ ...userInfo, country: e.target.value })} />
                                                    <button type="button" onClick={onClickInfo}>Payment Info</button>
                                                </div>) : (<div>
                                                    <label htmlFor="credit-number">Card Number:</label>
                                                    <input
                                                        id="credit-number"
                                                        className="cc-number"
                                                        type="tel"
                                                        pattern="\d*"
                                                        maxLength="19"
                                                        placeholder="Card Number"
                                                        value={userInfo.cardNumber}
                                                        onChange={e => setUserInfo({ ...userInfo, cardNumber: e.target.value })} />

                                                    <label htmlFor="credit-expires">Expiration Date:</label>
                                                    <input
                                                        id="credit-expires"
                                                        className="cc-expires"
                                                        type="tel"
                                                        pattern="\d*"
                                                        maxLength="7"
                                                        placeholder="MM / YY"
                                                        value={userInfo.expires}
                                                        onChange={e => setUserInfo({ ...userInfo, expires: e.target.value })} />

                                                    <label htmlFor="credit-cvc">CVC:</label>
                                                    <input
                                                        id="credit-cvc"
                                                        className="cc-cvc"
                                                        type="tel"
                                                        pattern="\d*"
                                                        maxLength="4"
                                                        placeholder="CVC"
                                                        value={userInfo.cvc} onChange={e => setUserInfo({ ...userInfo, cvc: e.target.value })} />
                                                    <button type="button" onClick={onClickPayNow}>Pay Now</button>
                                                </div>)}


                                            </form>
                                        </div>
                                    )}

                                </Popup>

                            </div>
                        </div>
                    </div>
                )
            }}
        </BookingContext.Consumer>
    )
}

export default RoomDetails
