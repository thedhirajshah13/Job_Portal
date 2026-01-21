import { Response, Request, NextFunction } from "express";

export const authorizeRole = (
  ...allowedRoles: ("applicant" | "recruiter")[]
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(404).json({ message: "Unauthorized access" });
    }
    next();
  };
};
