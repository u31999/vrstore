import Jwt from "jsonwebtoken";

const genrateToken = id => {
    return Jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default genrateToken