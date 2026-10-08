import { useState } from "react";
import "./App.css";

const roadmap = [
  {
    day: 1,
    history: "Historical Sources + Prehistoric Age",
    geography: "Universe, Stars & Earth Evolution",
    society: "Indian Society Structure",
    mental: "Number System"
  },
  {
    day: 2,
    history: "Indus Valley Civilization",
    geography: "Solar System",
    society: "Family",
    mental: "Number System"
  },
  {
    day: 3,
    history: "Vedic Cultures",
    geography: "The Earth – Part 1",
    society: "Marriage",
    mental: "Number Series"
  },
  {
    day: 4,
    history: "New Religious Movements – Jainism & Buddhism",
    geography: "The Earth – Part 2",
    society: "Kinship + Key Terminology",
    mental: "Letter Series"
  },
  {
    day: 5,
    history: "Mahajanapadas",
    geography: "Geomorphology – File 1",
    society: "Caste – Part 1",
    mental: "Odd Man Out"
  },
  {
    day: 6,
    history: "Mauryan Empire",
    geography: "Geomorphology – File 2",
    society: "Caste – Part 2",
    mental: "Coding-Decoding"
  },
  {
    day: 7,
    history: "Sunday Grand Test 1",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 8,
    history: "Post-Mauryan Kingdoms",
    geography: "Geomorphology – File 3",
    society: "Tribes",
    mental: "Blood Relations"
  },
  {
    day: 9,
    history: "Gupta Empire",
    geography: "Geomorphology – File 4",
    society: "Race",
    mental: "Averages"
  },
  {
    day: 10,
    history: "Rajput Age",
    geography: "Geomorphology – File 5",
    society: "Religion",
    mental: "Ratio & Proportion"
  },
  {
    day: 11,
    history: "Pallavas + Badami Chalukyas",
    geography: "Climatology – File 1",
    society: "Women",
    mental: "Percentage"
  },
  {
    day: 12,
    history: "Rashtrakutas + Kalyani Chalukyas",
    geography: "Climatology – File 2",
    society: "Social Inequality",
    mental: "Percentage"
  },
  {
    day: 13,
    history: "Cholas",
    geography: "Climatology – File 3",
    society: "Casteism",
    mental: "Simple Interest"
  },
  {
    day: 14,
    history: "Sunday Grand Test 2",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 15,
    history: "Eastern Chalukyas + Kakatiyas + Yadavas-Hoysalas-Pandyas",
    geography: "Climatology – File 4",
    society: "Communalism",
    mental: "Compound Interest"
  },
  {
    day: 16,
    history: "Arab Invasions – Beginning of Delhi Sultanate",
    geography: "Climatology – File 5",
    society: "Regionalism",
    mental: "Time & Work"
  },
  {
    day: 17,
    history: "Delhi Sultanate – Five Dynasties",
    geography: "Oceanography – File 1",
    society: "Violence Against Women",
    mental: "Time & Work"
  },
  {
    day: 18,
    history: "Vijayanagara Empire",
    geography: "Oceanography – File 2",
    society: "Violence Against Children",
    mental: "Time & Distance"
  },
  {
    day: 19,
    history: "Bhakti-Sufi Movements + Islamic Influence",
    geography: "NCERT India 1 – Location & Structure",
    society: "Child Labour",
    mental: "Time & Distance"
  },
  {
    day: 20,
    history: "Mughal Empire – Day 1",
    geography: "NCERT India 2 – Physiography",
    society: "Youth Discontent",
    mental: "Order of Magnitude"
  },
  {
    day: 21,
    history: "Sunday Grand Test 3",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 22,
    history: "Mughal Empire – Administration, Art & Literature",
    geography: "NCERT India 3 – Drainage + AP Rivers",
    society: "Social Welfare – Introduction",
    mental: "Data Analysis – Tables"
  },
  {
    day: 23,
    history: "Regional Kingdoms + Marathas",
    geography: "NCERT India 4 – Climate & Monsoon",
    society: "Government Policies & Welfare Programmes",
    mental: "Data Analysis – Bar Diagram"
  },
  {
    day: 24,
    history: "Sikhs + European Companies & British Expansion – Part 1",
    geography: "NCERT India 5 – Vegetation & Soils",
    society: "SC Welfare",
    mental: "Data Analysis – Line Graph"
  },
  {
    day: 25,
    history: "European Companies & British Expansion – Part 2",
    geography: "NCERT India 6 – Hazards & Disasters",
    society: "ST Welfare",
    mental: "Data Analysis – Pie Chart"
  },
  {
    day: 26,
    history: "EIC Economic Policies + Land Revenue + Cottage Industries",
    geography: "Minerals",
    society: "BC Welfare",
    mental: "Shapes & Sub-sections"
  },
  {
    day: 27,
    history: "Peasant & Tribal Revolts",
    geography: "Agriculture",
    society: "Minority Welfare",
    mental: "Data Analysis – Mixed"
  },
  {
    day: 28,
    history: "Sunday Grand Test 4",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 29,
    history: "Revolt of 1857",
    geography: "Livestock + Fisheries",
    society: "Women Welfare",
    mental: "Statement & Assumptions"
  },
  {
    day: 30,
    history: "Social & Religious Reform Movements",
    geography: "Forests",
    society: "Child Welfare",
    mental: "Statement & Argument"
  },
  {
    day: 31,
    history: "Indian National Congress – Moderate Era 1885–1905",
    geography: "Industrial Location Factors & Weber Theory",
    society: "Welfare of Persons with Disabilities",
    mental: "Statement & Conclusion"
  },
  {
    day: 32,
    history: "National Movement 1905–1919",
    geography: "Major Industries",
    society: "Society PYQs – Unit 1",
    mental: "Statement & Courses of Action"
  },
  {
    day: 33,
    history: "Gandhian Era 1919–1947",
    geography: "World Industrial Regions",
    society: "Society PYQs – Social Problems",
    mental: "Deductive Reasoning"
  },
  {
    day: 34,
    history: "Post-Independence Integration + Reorganisation of States",
    geography: "Transport, Trade & Communication",
    society: "Society PYQs – Welfare Mechanism",
    mental: "Inductive & Abductive Reasoning"
  },
  {
    day: 35,
    history: "Sunday Grand Test 5",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 36,
    history: "History PYQs – Ancient",
    geography: "Human Geography – Population & HDI",
    society: "Society MCQ Practice – Unit 1",
    mental: "100 Mixed Numeracy Questions"
  },
  {
    day: 37,
    history: "History PYQs – Medieval",
    geography: "Urbanisation, Migration & Tribes",
    society: "Society MCQ Practice – Unit 2",
    mental: "100 Mixed Reasoning Questions"
  },
  {
    day: 38,
    history: "History PYQs – Modern",
    geography: "Biogeography – Soils & Biomes",
    society: "Society MCQ Practice – Unit 3",
    mental: "100 Mixed Numeracy Questions"
  },
  {
    day: 39,
    history: "History MCQ Practice – Weak Chapters",
    geography: "Geography PYQs – Physical",
    society: "Society Weak Chapters Re-read",
    mental: "Mixed Reasoning"
  },
  {
    day: 40,
    history: "History MCQ Practice – Weak Chapters",
    geography: "Geography PYQs – India & AP",
    society: "Society One-liners",
    mental: "Data Analysis Mixed"
  },
  {
    day: 41,
    history: "History One-liners",
    geography: "Geography PYQs – Economic & Human",
    society: "Society PYQs – TSPSC",
    mental: "MA Sectional – 30 Q / 35 Min"
  },
  {
    day: 42,
    history: "Sunday Grand Test 6",
    geography: "Grand Test",
    society: "Grand Test",
    mental: "Grand Test"
  },
  {
    day: 43,
    history: "Ancient Revision + 40 Q",
    geography: "Physical Geography Revision + 40 Q",
    society: "Structure Revision + 40 Q",
    mental: "Numeracy – 40 Q"
  },
  {
    day: 44,
    history: "Medieval Revision + 40 Q",
    geography: "India & AP Physical Revision",
    society: "Social Issues Revision",
    mental: "Reasoning – 40 Q"
  },
  {
    day: 45,
    history: "Modern Revision + 40 Q",
    geography: "Economic Geography Revision",
    society: "Welfare Mechanism Revision",
    mental: "Data Analysis – 40 Q"
  },
  {
    day: 46,
    history: "Full Mock 1 – 150 Q",
    geography: "Mock Analysis",
    society: "Mock Analysis",
    mental: "Mock Analysis"
  },
  {
    day: 47,
    history: "Mock 1 Weak Topics",
    geography: "Human Geography Revision",
    society: "Mock 1 Weak Topics",
    mental: "Weak MA Topics"
  },
  {
    day: 48,
    history: "APPSC Group-II Previous Paper",
    geography: "Full Attempt + Analysis",
    society: "Previous Paper Analysis",
    mental: "Previous Paper Analysis"
  },
  {
    day: 49,
    history: "Sunday Grand Test 7 – Full Syllabus",
    geography: "Full Syllabus",
    society: "Full Syllabus",
    mental: "Full Syllabus"
  },
  {
    day: 50,
    history: "History PYQs – Error Topics",
    geography: "Geography PYQs",
    society: "Society PYQs",
    mental: "Mixed 40 Q"
  },
  {
    day: 51,
    history: "Full Mock 2 + Analysis",
    geography: "Full Mock 2",
    society: "Full Mock 2",
    mental: "Full Mock 2"
  },
  {
    day: 52,
    history: "Weak Topics",
    geography: "AP Rivers, Projects, Ports & Districts",
    society: "Weak Topics",
    mental: "Mixed 40 Q"
  },
  {
    day: 53,
    history: "Full Mock 3 + Analysis",
    geography: "Full Mock 3",
    society: "Full Mock 3",
    mental: "Full Mock 3"
  },
  {
    day: 54,
    history: "One-liners & Tables",
    geography: "Weak Topics",
    society: "One-liners & Tables",
    mental: "Formula Sheet"
  },
  {
    day: 55,
    history: "Previous Group-II Paper",
    geography: "Previous Paper Analysis",
    society: "Previous Paper Analysis",
    mental: "Previous Paper Analysis"
  },
  {
    day: 56,
    history: "Sunday Grand Test 8 – Full Syllabus",
    geography: "Full Syllabus",
    society: "Full Syllabus",
    mental: "Full Syllabus"
  },
  {
    day: 57,
    history: "Error Notebook – History & Society",
    geography: "Error Notebook – Geography",
    society: "Error Notebook",
    mental: "Light Practice – 20 Q"
  },
  {
    day: 58,
    history: "Full Mock 4",
    geography: "Exam Time Mock",
    society: "Exam Time Mock",
    mental: "Exam Time Mock"
  },
  {
    day: 59,
    history: "Error Notebook + One-liners",
    geography: "Error Notebook",
    society: "One-liners",
    mental: "Light Revision"
  },
  {
    day: 60,
    history: "Light Revision",
    geography: "Light Revision",
    society: "Light Revision",
    mental: "Admit Card + Centre Route + Early Sleep"
  }
];

const dailySchedule = [
  ["6:00 – 7:00 AM", "Current Affairs", "40 min reading + 10 min one-liners + 10 Q"],
  ["7:30 – 9:45 AM", "Indian History", "Chapter + one-liners + 25 MCQs"],
  ["10:00 – 12:15 PM", "Geography", "Chapter + one-liners + 25 MCQs"],
  ["12:15 – 1:30 PM", "Lunch + Rest", "Break"],
  ["1:30 – 3:45 PM", "Indian Society", "Chapter + one-liners + 25 MCQs"],
  ["4:00 – 5:30 PM", "Mental Ability", "Concept + shortcuts + 30 Q"],
  ["6:30 – 7:30 PM", "Current Affairs Backlog", "Monthly CA + notebook + 20 Q"],
  ["8:30 – 9:15 PM", "Daily Revision", "One-liners + error notebook"]
];

function App() {
  const [appscClicked, setAppscClicked] = useState(false);
  const [group2Clicked, setGroup2Clicked] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  const whatsappText = encodeURIComponent(
    "Hello Vibhillion AI, I need information about APPSC Group-II mock tests."
  );

  const handleAppscClick = () => {
    setAppscClicked(true);
    setGroup2Clicked(false);
  };

  const handleGroup2Click = () => {
    setGroup2Clicked(true);
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="brand">

          <div className="brand-logo">
            V
          </div>

          <div>
            <h2>VibhillionGroupAI</h2>
            <span>Exam Roadmaps</span>
          </div>

        </div>

        <nav className="main-nav">

          {/* Only APPSC has an onClick */}

          <button className="nav-item">
            UPSC
          </button>

          <button
            className={
              appscClicked
                ? "nav-item active"
                : "nav-item"
            }
            onClick={handleAppscClick}
          >
            APPSC
          </button>

          <button className="nav-item">
            TGPSC
          </button>

          <button className="nav-item">
            SSC
          </button>

          <button className="nav-item">
            BANKING
          </button>

          <button className="nav-item">
            RRB
          </button>

        </nav>

      </header>


      {/* APPSC GROUP MENU */}

      {appscClicked && (

        <div className="group-menu">

          {/* Group-I does nothing */}

          <button className="group-button">
            Group-I
          </button>


          {/* ONLY GROUP-II WORKS */}

          <button
            className={
              group2Clicked
                ? "group-button selected"
                : "group-button"
            }
            onClick={handleGroup2Click}
          >
            Group-II
          </button>


          {/* Group-III does nothing */}

          <button className="group-button">
            Group-III
          </button>


          {/* Group-IV does nothing */}

          <button className="group-button">
            Group-IV
          </button>

        </div>

      )}


      {/* GROUP-II CONTENT */}

      {appscClicked && group2Clicked ? (

        <main>

          {/* HERO */}

          <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

              <div className="badge">
                APPSC • GROUP-II
              </div>

              <h1>
                Group-II
                <span>60 Day Roadmap</span>
              </h1>

              <p>
                A structured preparation journey covering
                History, Geography, Indian Society, Current
                Affairs and Mental Ability.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() =>
                    document
                      .getElementById("roadmap")
                      .scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                >
                  Start Roadmap →
                </button>

                <button
                  className="secondary-button"
                  onClick={() =>
                    document
                      .getElementById("timing")
                      .scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                >
                  View Timetable
                </button>

              </div>

            </div>

          </section>


          {/* OVERVIEW */}

          <section className="overview">

            <div className="overview-card">
              <strong>60</strong>
              <span>Days</span>
            </div>

            <div className="overview-card">
              <strong>5</strong>
              <span>Core Subjects</span>
            </div>

            <div className="overview-card">
              <strong>8</strong>
              <span>Grand Tests</span>
            </div>

            <div className="overview-card">
              <strong>150</strong>
              <span>Questions / Test</span>
            </div>

          </section>


          {/* TIMING */}

          <section id="timing" className="section">

            <div className="section-title">

              <span>01</span>

              <div>
                <h2>Preparation Timing</h2>

                <p>
                  Organized study sessions for your
                  preparation.
                </p>
              </div>

            </div>


            <div className="timing-grid">

              <div className="timing-card prelims">

                <div className="timing-icon">
                  ⏱
                </div>

                <h3>Prelims</h3>

                <div className="big-time">
                  60 Days
                </div>

                <p>
                  Approximately 9 hours of daily
                  preparation covering reading,
                  one-liners, MCQs and revision.
                </p>

                <div className="time-list">

                  <div>
                    <b>Morning</b>
                    <span>
                      6:00 AM – 12:15 PM
                    </span>
                  </div>

                  <div>
                    <b>Afternoon</b>
                    <span>
                      1:30 PM – 5:30 PM
                    </span>
                  </div>

                  <div>
                    <b>Evening</b>
                    <span>
                      6:30 PM – 9:15 PM
                    </span>
                  </div>

                </div>

              </div>


              <div className="timing-card mains">

                <div className="timing-icon">
                  ✍
                </div>

                <h3>Mains</h3>

                <div className="big-time">
                  Custom
                </div>

                <p>
                  A customizable mains preparation
                  section for answer writing, GS
                  preparation and revision.
                </p>

                <div className="time-list">

                  <div>
                    <b>Answer Writing</b>
                    <span>
                      6:30 AM – 8:30 AM
                    </span>
                  </div>

                  <div>
                    <b>GS Preparation</b>
                    <span>
                      10:00 AM – 12:00 PM
                    </span>
                  </div>

                  <div>
                    <b>Revision</b>
                    <span>
                      8:30 PM – 9:15 PM
                    </span>
                  </div>

                </div>

              </div>

            </div>


            <div className="source-note">

              <b>Study flow:</b> Chapter reading →
              one-liners → MCQs. Sundays are used for
              combined Grand Tests.

            </div>

          </section>


          {/* ROADMAP */}

          <section id="roadmap" className="section">

            <div className="section-title">

              <span>02</span>

              <div>

                <h2>
                  Group-II 60 Day Roadmap
                </h2>

                <p>
                  Click any day to see the subjects
                  and preparation target.
                </p>

              </div>

            </div>


            <div className="roadmap-container">

              {roadmap.map((item) => {

                const isGrandTest =
                  item.day % 7 === 0;

                return (

                  <div
                    key={item.day}
                    className={
                      isGrandTest
                        ? "roadmap-day grand-test"
                        : "roadmap-day"
                    }
                  >

                    <button
                      className="day-header"
                      onClick={() =>
                        setActiveDay(
                          activeDay === item.day
                            ? null
                            : item.day
                        )
                      }
                    >

                      <div className="day-number">

                        <span>DAY</span>

                        <strong>
                          {item.day}
                        </strong>

                      </div>


                      <div className="day-title">

                        <h3>
                          {isGrandTest
                            ? "Sunday Grand Test"
                            : `Day ${item.day} Preparation`}
                        </h3>

                        <p>
                          History • Geography •
                          Society • Mental Ability
                        </p>

                      </div>


                      <div className="arrow">

                        {activeDay === item.day
                          ? "−"
                          : "+"}

                      </div>

                    </button>


                    {activeDay === item.day && (

                      <div className="day-content">

                        <div className="subject-card history">

                          <span>
                            HISTORY
                          </span>

                          <p>
                            {item.history}
                          </p>

                        </div>


                        <div className="subject-card geography">

                          <span>
                            GEOGRAPHY
                          </span>

                          <p>
                            {item.geography}
                          </p>

                        </div>


                        <div className="subject-card society">

                          <span>
                            INDIAN SOCIETY
                          </span>

                          <p>
                            {item.society}
                          </p>

                        </div>


                        <div className="subject-card mental">

                          <span>
                            MENTAL ABILITY
                          </span>

                          <p>
                            {item.mental}
                          </p>

                        </div>

                      </div>

                    )}

                  </div>

                );

              })}

            </div>

          </section>


          {/* DAILY TIMETABLE */}

          <section className="section">

            <div className="section-title">

              <span>03</span>

              <div>

                <h2>
                  Daily Timetable
                </h2>

                <p>
                  Daily preparation schedule.
                </p>

              </div>

            </div>


            <div className="table-wrapper">

              <table>

                <thead>

                  <tr>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Activity</th>
                  </tr>

                </thead>


                <tbody>

                  {dailySchedule.map(
                    (row, index) => (

                      <tr key={index}>

                        <td>
                          {row[0]}
                        </td>

                        <td>
                          {row[1]}
                        </td>

                        <td>
                          {row[2]}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </section>


          {/* MOCK TEST */}

          <section className="test-section">

            <div className="test-content">

              <span className="test-badge">
                MOCK TESTS
              </span>

              <h2>
                Ready to test
                <br />
                your preparation?
              </h2>

              <p>
                Practice competitive exams with
                Vibhillion AI using mock tests,
                practice mode and other preparation
                features.
              </p>


              <div className="test-buttons">

                <a
                  href="https://play.google.com/store/apps/details?id=com.vibhillion.vibhillionai"
                  target="_blank"
                  rel="noreferrer"
                  className="app-button"
                >
                  📱 Download Vibhillion AI
                </a>


                <a
                  href={`https://wa.me/?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-button"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>


            <div className="test-visual">

              <div className="phone">

                <div className="phone-top"></div>

                <div className="phone-screen">

                  <div className="phone-logo">
                    V
                  </div>

                  <h3>
                    Vibhillion AI
                  </h3>

                  <p>
                    Exam Preparation
                  </p>


                  <div className="phone-card">

                    <b>
                      Mock Tests
                    </b>

                    <span>
                      Practice • Timed
                    </span>

                  </div>


                  <div className="phone-card">

                    <b>
                      AI Chat
                    </b>

                    <span>
                      Ask & Learn
                    </span>

                  </div>


                  <div className="phone-card">

                    <b>
                      Mind Maps
                    </b>

                    <span>
                      Visual Learning
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </main>

      ) : (

        /* INITIAL SCREEN */

        <section className="welcome">

          <div className="welcome-overlay"></div>

          <div className="welcome-content">

            <span>
              VIBHILLIONAI
            </span>

            <h1>
              Exam Roadmaps
            </h1>

            <p>
              Select APPSC from the navigation menu
              to explore the available groups.
            </p>

          </div>

        </section>

      )}


      {/* FOOTER */}

      <footer>

        <div className="footer-main">

          <div>

            <div className="brand footer-brand">

              <div className="brand-logo">
                V
              </div>

              <div>

                <h2>
                  VibhillionAI
                </h2>

                <span>
                  Smart Exam Preparation
                </span>

              </div>

            </div>


            <p>
              Prepare smarter with structured
              roadmaps, mock tests, quizzes and
              AI-powered learning.
            </p>

          </div>


          <div className="footer-links">

            <h3>
              Exam Roadmaps
            </h3>

            <a href="#roadmap">
              APPSC Group-II
            </a>

            <a href="#timing">
              Prelims Timing
            </a>

            <a href="#timing">
              Mains Timing
            </a>

          </div>


          <div className="footer-links">

            <h3>
              Connect
            </h3>

            <a
              href="https://play.google.com/store/apps/details?id=com.vibhillion.vibhillionai"
              target="_blank"
              rel="noreferrer"
            >
              Download App
            </a>

            <a
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.vibhillion.vibhillionai"
              target="_blank"
              rel="noreferrer"
            >
              Vibhillion AI
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 VibhillionAI. All rights reserved.
          </span>

          <span>
            APPSC Group-II 60 Day Roadmap
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;