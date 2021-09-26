import axios from "axios";

const getImages = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=1&_limit=4`)
    
    if (response.status === 200){
        return response.data
    } else {
        return []
    }
}

export default getImages
