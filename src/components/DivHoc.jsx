import { Box } from "@mui/material";
export const div = (props) => {
    const { h, w, bg, b, br, c, bs} = props
    return {
        height: h,
        width: w,
        backgroundColor: bg,
        border: b,
        borderRadius: br,
        Color: c,
        boxShadow : bs,

    }
}
