import "server-only";
import { getUserFromDB } from "./db";
 
export function getUserDTO(userId: string) {
  const user = getUserFromDB(userId);
 
  return {
    id: user.id,
    name: user.name,
    createdAt: user.createdAt,
  };
}