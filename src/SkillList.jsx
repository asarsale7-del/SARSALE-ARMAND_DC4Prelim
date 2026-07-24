function SkillList() {
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "Laravel"];

  return (
    <div>
      <h2>My SkillList</h2>
      <p>I know {skills.length} skills.</p>

      <ul>
        <li>{skills[0]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
        <li>{skills[4]}</li>
        <li>{skills[1]}</li>
      </ul>
    </div>
  );
}

export default SkillList;
