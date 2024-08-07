import { Request, Response } from "express";
import IController from "./ControllerInterface";
import { where } from "sequelize";
const db = require("../db/models");

class TodoController implements IController {

    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const todos = await db.todo.findAll({
            where: { user_id: id },
            attributes: ["id", "description"]
        })
        return res.send("data");
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const { description } = req.body;

        const todo = await db.todo.create({
            user_id: id,
            description,
        })

        return res.send("sukses");
    }

    show = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const todo = await db.todo.findOne({
            where: { id },
            attributes: ["id", "description"]
        })
        return res.send("person");
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;
        const { description } = req.body;
        const todo = await db.todo.update({
            description
        }, {
            where: { id }
        })
        return res.send("update sukses");
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const todo = await db.todo.destroy({
            where: { id }
        })
        return res.send("person");
    }
    
}

export default new TodoController;