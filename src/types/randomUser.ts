type Name = {
    title: string
    first: string
    last: string
}

type StreetDetails = {
    name: string
    number: string
}

type Coordinates = {
    latitude: string
    longitude: string
}
type Timezone = {
    offset: string
    description: string
}

type Location = {
    street: StreetDetails
    city: string
    state: string
    country: string
    postcode: string
    coordinates: Coordinates
    timezone: Timezone
}

type Login = {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

type DateInfo = {
    date: Date
    age: string
}

type Id = {
    name: string
    value: string
}

type Picture = {
    large: string
    medium: string
    thumbnail: string
}

export type RandomUser = {  
    gender: string
    name: Name
    location: Location
    email: string
    login: Login
    dob: DateInfo
    registered: Date
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
}