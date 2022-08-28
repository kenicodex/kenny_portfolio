// var result ;
// fetch('https://dummyjson.com/products/' + sessionStorage.getItem('product'))
//     .then(res => res.json())
//     .then(data => {
//         result = data
//     })
// export var result;
// data = {
//     "id": 1,
//     "title": "Loading...",
//     "description": "Loading...",
//     "price": "Loading...",
//     "discountPercentage": "Loading...",
//     "rating": "Loading...",
//     "stock": "Loading...",
//     "brand": "Loading...",
//     "category": "Loading...",
//     "thumbnail": "Loading...",
//     "images": ["...", "...", "..."]
// // }
// var url = 'https://dummyjson.com/products/' + sessionStorage.getItem('product')

async function getRequest() {
    const res = await fetch('https://dummyjson.com/products/' + sessionStorage.getItem('product'));
    if (res.ok) { 
        return res.json();
    } else {
        throw new Error("Bad response");
    }
}

export async function getData() {
    try {
        const data = await getRequest('https://dummyjson.com/products/' + sessionStorage.getItem('product'));
        return data
    } catch(e) {
        console.log(e);
    }
}

