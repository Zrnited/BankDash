import avatar from "@/assets/images/avatar.png";
import { StaticImageData } from "next/image";

interface User {
    name: string;
    avatar: StaticImageData
    userName: string;
    email: string;
    dob: string;
    address: string;
    postalCode: number;
    password: string;
    city: string;
    country: string;
}

const user: User = {
    name: "charlene reed",
    avatar: avatar,
    userName: "charlene reed",
    email: "charlenereed@gmail.com",
    dob: "25 january 1990",
    address: "san jose, california, usa.",
    postalCode: 45962,
    password: "wellfuckit",
    city: "san jose",
    country: "USA"
}

export { user }