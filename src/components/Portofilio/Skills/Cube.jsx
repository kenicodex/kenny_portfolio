import React from 'react'

function Cube() {
    return (
        <div class="cube-container">
            <input className="radio-button" type="radio" name="cube-gallery" checked />
            <input className="radio-button" type="radio" name="cube-gallery" />
            <input className="radio-button" type="radio" name="cube-gallery" />
            <input className="radio-button" type="radio" name="cube-gallery" />
            <input className="radio-button" type="radio" name="cube-gallery" />
            <input className="radio-button" type="radio" name="cube-gallery" />
            <div className="cube">
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
                <div className="cube-side"></div>
            </div>
        </div>
    )
}

export default Cube