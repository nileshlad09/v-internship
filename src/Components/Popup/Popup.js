import React from 'react'
import './Popup.css'
import { Link } from 'react-router-dom'
const Popup = () => {
    return (
        <div className="modal2">
            <div className="overlay2"></div>
            <div className="modal-content2">
                <h2>Your data successfully added.</h2>
                <div className="btns2">
                    <Link to="/">
                    <button className="close-modal2">
                        Ok
                    </button>
                    </Link>
                    <Link to="/addinternship/1">
                    <button className="Add-modal2">
                        Add More Data
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Popup