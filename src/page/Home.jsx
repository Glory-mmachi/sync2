import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import MembersProfile from "../components/MembersProfile";
export default function Home() {
  return (
    <div className="home-container">

      <div className="dashboard-home">
        <Dashboard />
      </div>
    <div className="home-container-mid">
      <div className="navbar-home">
        <Navbar />
      </div>

      <div className="membersProfile-home">
        <MembersProfile />
      </div>
    </div>
    </div>
  );
}
