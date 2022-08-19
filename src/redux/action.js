export function addTodo(text) {
    return {
        type: "Add_Item",
        payload: text
    }
}
export function check(index,array) {
    return {
        type: "Check",
        index : index,
        array : array
    }
}
export function delit(index,array) {
    return {
        type: "Del",
        index : index,
        array : array
    }
}