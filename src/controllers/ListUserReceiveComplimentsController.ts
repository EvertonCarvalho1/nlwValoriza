import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
    async name(request: Request, response: Response) {
        const { user_id } = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(compliments);
    }
};

export { ListUserReceiveComplimentsController };