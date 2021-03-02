export type User = {
    name: string,
    age: number,
    description: string,
    // friends: [User],
}
interface UserPanelProps {
    user: User,
}

function UserPanel({user}: UserPanelProps) {
    return (
        <div>
            <h2>User:</h2>
            <p>
                name: {user.name} <br />
                age: {user.name} <br />
                description: {user.description} <br />
            </p>
        </div>
    );
}

export default UserPanel;
