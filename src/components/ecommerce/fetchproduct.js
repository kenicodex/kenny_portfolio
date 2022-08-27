export function getAllProduct () {
    return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            return data
        })

}