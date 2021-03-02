import UserPanel, {User} from './User';

interface Props {
    user: User,
    // friends: [User],
}

function UserPage({user}: Props) {
    return (
        <div>
            <UserPanel user={user} />
        </div>
    );
}
export default UserPage;
