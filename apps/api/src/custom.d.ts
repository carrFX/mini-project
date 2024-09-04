// src/custom.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload; // atau tipe lain sesuai dengan data yang di-decode dari token
    }
  }
}
