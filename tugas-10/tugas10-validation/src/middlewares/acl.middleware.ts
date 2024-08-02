import { IReqUser } from "@/utils/interfaces";
import { NextFunction, Request, Response } from "express";

export default (roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const userRoles = (req as IReqUser).user.roles;
    console.log(userRoles)
    console.log(!userRoles.some((userRole) => roles.includes(userRole)))

    if (!userRoles || !userRoles.some((userRole) => roles.includes(userRole))) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };