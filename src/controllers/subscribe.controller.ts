import { Request, Response } from "express";
import { SubscribeService } from "../services/subscribeService";

const subsService = new SubscribeService();

export class SubscribeController {
  async subscribe(request: Request, response: Response) {
    try {
      await subsService.subscribe(request.user.id, request.params.projectId);

      response.status(201).json({ message: "Usuario cadastrado com sucesso!" });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  }

  async listSubs(request: Request, response: Response) {
    try {
      const allSubs = await subsService.listSubscribes(request.user.id);
      console.log(request.user);

      response.status(200).json(allSubs);
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  }

  async removeSubscribe(request: Request, response: Response) {
    try {
      await subsService.removeSubscribe(
        request.user.id,
        request.params.projectId
      );

      response.status(200).json({ message: "Inscricao cancelada com sucesso" });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  }
}
