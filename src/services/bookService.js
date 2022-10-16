import axios from "axios"

export const bookService = {
    load
}

async function load(query) {
    console.log('start');
    const res = await axios({
        method: 'GET',
        url: 'https://openlibrary.org/search.json',
        params: {
            q: query,
        }
    })
    console.log('end');
    return res.data;
}