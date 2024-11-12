import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv/config"
import { CustomRequest } from "../config";

interface User {
  id: number
  role: string;
}

const cekJwt = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token || token == undefined) return res.status(401).json({ message: "Please log in to your account" });


  jwt.verify(token, String(process.env.SECRET_KEY), (err: jwt.VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Access denied" });
    }

    req.user = decoded as User;
    return next();
  });
};

const allowedRole = (...allowedRoles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role || !allowedRoles.includes(req.user.role)) return res.status(403).json({ message: "Access denied" });
    return next();
  }
}

export { cekJwt, allowedRole }
