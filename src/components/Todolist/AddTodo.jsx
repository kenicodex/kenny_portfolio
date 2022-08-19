import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Divider, TextField, Box, Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/action'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function AddTodo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [item, setItem] = React.useState("")
    const [display, setDisplay] = React.useState("0")
    const dispatch = useDispatch()
    const typing = (e) => {
        setItem(e.target.value)
        if(e.target.value.length > 0){
            setDisplay("1")
        }else {
            setDisplay("0")
        }
    }
    const chevk = () => {
        // if(item.length > 3){
        dispatch(addTodo(item))
        // }else{
        // alert("most be more than 3 words")
        // }
        setItem("")
    }

    return (
        <div>
            <AddCircleIcon onClick={handleOpen} sx={{ position: "absolute", bottom: "5%", width: "50px", height: "50px", color: "green", p: "30px", borderRadius: "100%", left: "46%" }} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {item === '' ? 'Add new item to list' : 'Add ' + item + ' to the list '}
                    </Typography>
                    <Divider />
                    <TextField id="standard-basic" label="Item" variant="standard" value={item} onChange={(e) => { typing(e) }} />
                    <Button variant='contained'
                        sx={{ px: "5px", ml: "60px", mt: "10px", opacity: display, }} onClick={() => chevk()}>Add</Button>
                </Box>
            </Modal>
        </div>
    );
}
