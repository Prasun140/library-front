import { BookModel } from "./book.model";
import { UserModel } from "./user.model";

export class LendingModel {
    id: number = -1;
    lendDate: string = "";
    returnDate: string = "";
    userFk: UserModel = {
        id: -1,
        email: "",
        enabled: true,
        firstName: "", lastName: "", password: "", phone: "", role: "", username: ""
    };
    bookFk: BookModel = {
        id: -1,
        title: "",
        description: "",
        author: "",
        publishYear: "",
        stock: 0,
    };
    status: string = ""
}