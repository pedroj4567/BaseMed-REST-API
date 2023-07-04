import jwt from 'jsonwebtoken'

const createJWT = ({id}) =>{
    return jwt.sign({idUser : id}, process.env.SECRET_KEY, {
        expiresIn:"24h"
    });
}

export default createJWT;