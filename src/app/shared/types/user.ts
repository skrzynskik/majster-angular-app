import {Room} from "./contents";

export type User = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    userRooms?: Room[];
}
