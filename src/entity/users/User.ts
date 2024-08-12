import UserEnum from '../../enums/UserEnum'

interface User {
    role: UserEnum
    email: string
    password: string
}

export default User
