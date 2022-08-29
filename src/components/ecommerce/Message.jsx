
import React, { useEffect, useState } from 'react'
import { Alert, Fade } from '@mui/material';
// import { motion } from 'framer-motion';

function Message(props) {
    const [show, setshow] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setshow(false)            
        }, 4000);
    },[show])
    return (
        <>
            <Fade
                in={!show ? props.show : show }
                timeout={3000}>
                <Alert
                    variant={props.variant ? props.variant : 'filled'}
                    severity={props.severity}
                    sx={{
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