function StudentCard(props) {
  return (
    <div >
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>{props.isRegular ? "Regular Student" : "Irregular Student"}</p>
    </div>
  );
}

export default StudentCard;
