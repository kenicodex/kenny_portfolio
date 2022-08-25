import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import AddTodo from './AddTodo'
import { useSelector, useDispatch } from 'react-redux'
// import { DeleteIcon } from '@mui/icons-material';
import { check, delit } from '../../redux/action'
import './todolist.css'
import Navbar from "../../Semantics/Navbar.tsx";

export default function TodoList() {
    const [message, setMessage] = React.useState("All Task")

    const todo = useSelector((state) => state)
    const dispatch = useDispatch()
    const checkItem = (index, array) => {
        dispatch(check(index, array))
    }
    const show = () => {
        let pass = window.prompt("enter key to view secret message")
        if (pass === "chemistrylab") {
            setMessage("Nancy, I love you")
        }
        setTimeout(() => {
            setMessage("All Task")
        }, 5000);
    }
    return (
        <React.Fragment>
            <Navbar /> 
            <Container sx={{ border: "1px solid gray", width: { xs: "90%", lg: "500px" }, borderRadius: "10px", m: { xs: "5vh 5%", lg: "5vh auto" }, height: "90vh", boxShadow: "3" }}>
                <Typography sx={{ textAlign: "center", my: "20px" }} fontSize="40px" fontFamily={"Marterl"} onClick={() => { show() }}>
                    {message}
                </Typography>
                {todo.length > 0 ? todo.map(({ id, item, done, date }, i) => {
                    return (
                        <Box key={i} sx={{ borderRadius: "20px", boxShadow: "3", width: "92%", mx: "4%", mt: "5px", py: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography fontSize="20px" fontFamily="cursive" sx={{ textDecoration: !done ? "" : "line-through", mx: " 20px ", color: done ? 'gray' : 'black' }}>
                                {item}
                            </Typography>
                            <Box sx={{ position: "relative", right: "20px", display: "flex", justifyContent: 'space-between' }}>
                                <input type="checkbox" className='check' onChange={() => checkItem(i, todo[i])} />
                                <Button onClick={() => { dispatch(delit(i, todo[i])) }}>
                                    <i class="fa fa-trash-o" style={{ fontSize: "22px", color: "red" }}></i>
                                </Button></Box>
                        </Box>)
                }) : <Typography sx={{ textAlign: "center", pt: "25%", fontSize: "30px", fontWeight: "100" }}> Nothing to dispaly </Typography>}
                <AddTodo />
            </Container>
        </React.Fragment>

    )
}