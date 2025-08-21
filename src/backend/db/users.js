import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarjhmsh",
    lastName: "Balghmghika",
    email: "1@gmail.com",
    password: "1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    firstName: "Adarhtjhmsh",
    lastName: "Balghmghika",
    email: "2@gmail.com",
    password: "2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    firstName: "Adathhjrjhmsh",
    lastName: "Balghmghika",
    email: "3@gmail.com",
    password: "3",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
