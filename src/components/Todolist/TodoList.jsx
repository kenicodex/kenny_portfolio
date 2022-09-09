import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import AddTodo from './AddTodo'
import { useSelector, useDispatch } from 'react-redux'
import './todolist.css'
import Navbar from "../Semantics/Navbar.tsx";
import { deleteTodo, toogle } from '../../redux/todoSlice'

export default function TodoList() {
    const [message, setMessage] = React.useState("All Task")

    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch()
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
        <Box sx={{backgroundImage:"url(https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9kb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)"
        , backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center", height:"100vh"}} >
            <Navbar /> 
            <Container sx={{ border: "1px solid gray", width: { xs: "90%", lg: "500px" }, borderRadius: "10px", m: { xs: "2vh 5%", lg: "2vh auto" }, height: "86vh", boxShadow: "3" }}>
                <Typography sx={{ textAlign: "center", my: "20px" }} fontSize="40px" fontFamily={"open sans"} onClick={() => { show() }}>
                    {message}
                </Typography>
                {todo.length > 0 ? todo.map(({ id, item, done, date }, i) => {
                    return (
                        <Box key={i} sx={{ borderRadius: "20px", boxShadow: "3", width: "92%", mx: "4%", mt: "5px", py: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography fontSize="20px" fontFamily="open sans" sx={{ textDecoration: !done ? "" : "line-through", mx: " 20px ", color: done ? 'gray' : 'black' }}>
                                {item}
                            </Typography>
                            <Box sx={{ position: "relative", right: "20px", display: "flex", justifyContent: 'space-between' }}>
                                <input type="checkbox" className='check' onChange={() => dispatch(toogle({id:id}))} />
                                <Button onClick={() => { dispatch(deleteTodo({id:id})) }}>
                                    <i class="fa fa-trash-o" style={{ fontSize: "22px", color: "red" }}></i>
                                </Button></Box>
                        </Box>)
                }) : <Typography sx={{ textAlign: "center", pt: "25%", fontSize: "30px", fontWeight: "100" }}> Nothing to dispaly </Typography>}
                <AddTodo />
            </Container>
        </Box>

    )
}