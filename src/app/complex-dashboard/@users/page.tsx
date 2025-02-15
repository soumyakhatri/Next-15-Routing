import "./styles.css";
import Link from "next/link";

export default function Users() {
    return (
        <div className="users-container">
            <h1>This is users section</h1>
            <Link 
                href="/complex-dashboard/users"
                className="user-link"
            >
                Go to Users List
            </Link>
        </div>
    );
}