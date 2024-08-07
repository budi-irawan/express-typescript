import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    {
        id: 1, 
        name: "ADi",
    },
    {
        id: 2, 
        name: "ADi",
    },
    {
        id: 3, 
        name: "ADi",
    },
    {
        id: 4, 
        name: "ADi",
    },
    {
        id: 5, 
        name: "ADi",
    },
];

class UserController implements IController {

    index(req: Request, res: Response): Response {
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        data.push({id,name,})

        return res.send("sukses");
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;
        return res.send("update sukses");
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.filter(item => item.id != id);
        return res.send(person);
    }
    
}

export default new UserController;