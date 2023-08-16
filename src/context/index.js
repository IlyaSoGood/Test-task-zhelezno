import { createContext } from "react";
const initialValue = {
    all: [
        {

        }
    ],
    totalSize: 0,
    favorite: [
        {

        }
    ],

}

export const ListContext = createContext(initialValue);