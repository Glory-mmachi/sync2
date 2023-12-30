import calender from "../assets/attendance_calendar-2.svg";
import clock from "../assets/attendane_clock.svg";

export default function Attendance() {
  return (
    <div className="">
      
      <section className="attendance-container">
        <h1>Attendance History</h1>
        <article>
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
        
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
          <main className="attendance-content">
            <div className="attendance-top">
              <img src={calender} alt="" />

              <p>4th August 2023</p>
            </div>
            <div className="attendance-content-down">
              <p>Sunday Service</p>
              <div>
                <img src={clock} alt="" />
                <p>8:00AM</p>
              </div>
            </div>
          </main>{" "}
        </article>
      </section>
    </div>
  );
}
