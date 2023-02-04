const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

getData('https://jttytsonplaceholder.typicode.com/todos')