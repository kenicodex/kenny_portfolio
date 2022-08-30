import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function Search(props) {
    const [results, setresults] = useState([])
    const [display, setdisplay] = useState([])
    React.useEffect(() => {
        if (props.value !== "" && props.value.length > 0) {
            fetch(`https://dummyjson.com/products/search?q=${props.value}`)
                .then(res => res.json())
                .then(data => setresults(data.products));
                setdisplay("block")
        } else {
            setresults([])
            setdisplay("none")
        }

    }, [props.value])

    return (
        <>   <List sx={{ width: '100%', cursor:'pointer',maxWidth: 360, bgcolor: 'light', position: "absolute", top: 42, left: 44, display: display }} className={"bg-light shadow rounded-bottom"}>
            {results.length !== 0 ? results.map(({ title, thumbnail, price, id }) => {
                return (
                    <ListItem  onClick={() => { window.location.assign("/product"); sessionStorage.setItem('product', id) }}>
                        <ListItemAvatar>
                            <Avatar>
                                {/* <ImageIcon /> */}
                                <img src={thumbnail} alt="" />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={title} secondary={"$" + price} />
                    </ListItem>
                )
            }) :
                <>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                {/* <ImageIcon /> */}
                                <Skeleton />

                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"No item found"} />
                    </ListItem>
                </>
            }

        </List>
        </>
    )
}

export default Search