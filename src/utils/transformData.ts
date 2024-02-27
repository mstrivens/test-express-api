import { type RandomUser } from "../types/randomUser"
import { type Employee } from "../models/employee"

export const transformData = (user: RandomUser): Employee => {
    return {
        id: user.id?.value,
        first_name: user.name?.first,
        last_name: user.name?.last,
        name: `${user.name?.first} ${user.name?.last}`,
        display_name: user.login.username,
        date_of_birth: user.dob.date,
        avatar_url: user.picture.thumbnail,
        personal_phone_number: user.phone,
        work_email: user.email
    }
}