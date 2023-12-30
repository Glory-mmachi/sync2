import { data } from "../../data";
import logo from "../assets/icon_Group 155.svg";
import logout from "../assets/logout.svg";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <img src={logo} alt="logo" />
        <p>Sync</p>
      </header>

      <div className="dashboard-mid">
        <main>
          {data.map(({ id, url, title }) => {
            return (
              <ul key={id} className="dashboard-content">
                <li className="dash-cont">
                  <img src={url} alt="" />
                  <p>{title}</p>
                </li>
              </ul>
            );
          })}
        </main>
      </div>

      <footer>
        <img src={logout} alt="logout" />
        <p>Log out</p>
      </footer>
    </div>
  );
}
