import express from "express";
 
import { 
    getAllPasswords,
    createPassword,
    getPasswordById,
    updatePassword,
    deletePassword
} from "../controllers/Passwords.js";
 
const router = express.Router();
 
router.get('/', getAllPasswords);
router.get('/:id', getPasswordById);
router.post('/', createPassword);
router.patch('/:id', updatePassword);
router.delete('/:id', deletePassword);
 
export default router;