import Axios from "axios";

export const categoryMovies = async (API_URL) => {
    try{
        let response =await Axios.get(API_URL)
        return response.data
    }
    catch(error){
        console.log("Error while calling the API",error.message)
        return error.response.data
    }
}
