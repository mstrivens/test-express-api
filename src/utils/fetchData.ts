import axios, {AxiosResponse, AxiosError} from 'axios';
import { type RandomUser } from "../types/randomUser"

export const fetchData = async (url: string): Promise<RandomUser> => {
    try {
        const response: AxiosResponse<{[key:string]: Array<RandomUser>}> = await axios.get(url)
        const data: RandomUser = response.data.results[0]
        return data
    } catch (e: AxiosError | unknown) {
        if (e instanceof AxiosError) {
            console.log(e.response)
        }
        console.log(e)
        throw e;
    }
}