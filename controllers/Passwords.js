import Password from "../models/PasswordModel";
 
export const getAllPasswords = async (req, res) => {
    try {
        const Passwords = await Password.findAll();
        res.json(Passwords);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPasswordById = async (req, res) => {
    try {
        const Password = await Password.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Password[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPassword = async (req, res) => {
    try {
        await Password.create(req.body);
        res.json({
            "message": "Password Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePassword = async (req, res) => {
    try {
        await Password.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Password Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePassword = async (req, res) => {
    try {
        await Password.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Password Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}