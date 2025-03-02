import React from "react";
import './Main.css'
import hero from '../../assets/hero.jpg'
import { Navigate, useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
        <main className="hero-section">
            <section className="hero-text">
                <p>Little Lemon</p>
                <p>Chicago</p>
                <p className="para-text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <button
                    className="default-button-yellow"
                    style={{ marginTop: '30px' }}
                    onClick={()=>navigate('/reserve-a-table')}
                >
                    Reserve a Table
                </button>
            </section>
            <img className="hero-image" src={hero} />
        </main>
    )
}

export default Main;