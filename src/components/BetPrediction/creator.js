import React from 'react'
let page = []

export class Creator {
    constructor(text, task, style,) {
        this.text = text
        this.task = task
        this.style = style
    }
    writeText(content, color, fontSize, fontFamily) {
        alert("kjh")
        page.push(React.createElement(
            'span',
            {
                style:
                {
                    color: color ? color : 'black',
                    fontSize: fontSize ? fontSize + 'px' : '12px',
                    fontFamily: fontFamily ? fontFamily : 'open sans'
                }
            },
            content ? content : 'some content'
        )
        )
    }
    createButton() {

    }
    createImage() {

    }
    createDiv() {

    }
    createInput() {

    }
}
export const Components = () => {
    return <>{page[0]}</>
}