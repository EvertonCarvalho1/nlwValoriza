import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { ListTagService } from "../services/ListTagService";

class ListTagsConstroller {
    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagService();

        const tags = await listTagsService.execute();

        return response.json(tags);
    }
}

export { ListTagsConstroller }