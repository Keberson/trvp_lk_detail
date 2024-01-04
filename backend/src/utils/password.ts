import bcrypt from 'bcryptjs';

export const hashPassword = (password: string): string => {
    return bcrypt.hashSync(password, 10);
}

export const comparePasswords = (password: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
}
