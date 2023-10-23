const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Card />
      <div>
        <About />
        <div>
          <SkillSet />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div>
      <img
        src="profile-photo.png"
        alt="profile-photo"
        className="profile-photo"
      />
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>Ekpe Glory</h2>
      <p className="intro">
        Front-end web developer and Technical writer.When not coding, i love to
        play video games, cook and read inspirational books.
      </p>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="skill-list">
      {/* <Skills skill="HTML + CSS" emoji="💪" color="Blue" />
      <Skills skill="JavaScript" emoji="💪" color="yellow" />
      <Skills skill="Web Design" emoji="💪" color="green" />
      <Skills skill="Git and GitHub" emoji="👍" color="red" />
      <Skills skill="React" emoji="💪" color="blue" />
      <Skills skill="vue" emoji="👶" color="red" /> */}
      {skills.map((skill)=>
      <Skills skills={skill} key={skills.skill}/>
        )}
    </div>
  );
}

function Skills({skill, color}) {
  return (
    <>
      <button className="button-list" style={{backgroundColor: color}}>
        {skill}
        
      </button>
    </>
  );
}
export default App;
