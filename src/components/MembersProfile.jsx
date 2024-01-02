import SingleProfile from "./SingleProfile";
import Attendance from "./Attendance";
import menu from "../assets/profile_menu_Frame 53.svg";
export default function MembersProfile() {
  return (
    <div className="membersProfile-container">
      <header>
        <h1>Member Profile</h1>
        <div className="header-right">
          <button>Export Info</button>
          <img src={menu} alt="" />
        </div>
      </header>

      <SingleProfile />
      <Attendance />
    </div>
  );
}
