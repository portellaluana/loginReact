import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div className="divDashboard">
        <p>Dashboard</p>
        <Link to="/entrar">Fazer login</Link>
        </div>
    )
}