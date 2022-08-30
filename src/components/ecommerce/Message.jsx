
import React, { useEffect, useState } from 'react'
import { Alert, Fade } from '@mui/material';
// import { motion } from 'framer-motion';

function Message(props) {
    const [show, setshow] = useState(false)
    useEffect(()=>{
        setshow(props.show)
        setTimeout(() => {
            setshow(false)         
        }, 5000);
    },[props.show])
    return (
        <>
            <Fade
                in={show}
                timeout={3000}>
                <Alert
                    variant={props.variant ? props.variant : 'filled'}
                    severity={props.severity}
                    sx={{
                        display : show,
                        width: { xs: "75%", md: "30%" },
                        height: 100,
                        position: "fixed",
                        right: props.right ? props.right : '20px',
                        zIndex: "100",
                        boxShadow: "2",
                        top: "40px"
                    }}>
                    {props.message}
                </Alert>

            </Fade>
        </>
    )
}
export default Message;