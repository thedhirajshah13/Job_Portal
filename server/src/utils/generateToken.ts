import jwt from "jsonwebtoken";
export const generateToken = (
  userId: string,
  role: "applicant" | "recruiter",
) => {
  const token = jwt.sign({ userId, role }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
  return token;
};
