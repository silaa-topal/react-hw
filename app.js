import axios from "axios"

function interval(ms) {
    return new Promise(resolve => setInterval(resolve, ms));
}

const dataManipulation = async(id) => {
     const profile = new Promise(async(resolve,reject) => {
        const data = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        resolve(data.data)
        reject("hata2")
     })
     const posts = new Promise(async(resolve, reject) => {
        const data = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        resolve(data.data)
        reject("hata2")
     })
    return Promise.all([profile, posts]).then((values) => {
        values[0].posts = values[1]
        console.log(values[0])
    }),
    interval(5000).catch((err)=>{
        console.log(err)
    })
}



export default dataManipulation

