import profileImg from "../assets/SingleP_Image.svg";
import blueCircle from "../assets/SingleBlueCircle_Frame 145.svg";

import bt1 from "../assets/singleP_iconamoon_profile-light.svg";
import bt2 from "../assets/singleP_login.svg";
import bt3 from "../assets/singleP_blogger.svg";

export default function SingleProfile() {
  return (
    <div className="singleProfile-container">
      <section className="section-top">
        <div className="section-content">
          <img src={profileImg} alt="profile" />
          <div className="section-content-right">
            <h1>Lilian Agatha Orule</h1>
            <button>Active</button>
          </div>
        </div>

        <div className="section-content">
          <div className="blueCircle">
            <img src={blueCircle} alt="blue" />
          </div>
          <div>
            <p>Phone number</p>
            <h3>091108137</h3>
          </div>
        </div>

        <div className="section-content">
          <div className="blueCircle">
            <img src={blueCircle} alt="blue" />
          </div>
          <div>
            <p>Email</p>
            <h3>Lilianagatha@gmail.com</h3>
          </div>
        </div>
      </section>
      <section className="section-down">
        <div className="section-content">
          <div className="blueCircle">
            <img src={bt1} alt="blue" />
          </div>
          <div>
            <p>Total Attendance</p>
            <h3>500</h3>
          </div>
        </div>

        <div className="section-content">
          <div className="blueCircle">
            <img src={bt2} alt="blue" />
          </div>
          <div>
            <p>Average check In</p>
            <h3>8:00AM</h3>
          </div>
        </div>

        <div className="section-content">
          <div className="blueCircle">
            <img src={bt1} alt="blue" />
          </div>
          <div>
            <p>Sunday Attendance</p>
            <h3>256</h3>
          </div>
        </div>

        <div className="section-content">
          <div className="blueCircle">
            <img src={bt3} alt="blue" />
          </div>
          <div>
            <p>Week Attendance</p>
            <h3>129</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
