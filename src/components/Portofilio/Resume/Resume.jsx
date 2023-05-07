import React from 'react'

function Resume() {
    return (

        <iframe src={process.env.PUBLIC_URL + "/CVs/2023CV.pdf"} style={{ position: 'fixed', left: 0, top: 0, zIndex: 100, }}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
            title='Resume'
        ></iframe>
    )
}

export default Resume