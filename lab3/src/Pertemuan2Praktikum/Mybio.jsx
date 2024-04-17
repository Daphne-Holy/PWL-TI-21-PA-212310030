const myStyle = {
  color: "red",
  fontSize: "100px",
  textAlign: "center"
};
const MyBio = (props) => {
  return (
    <div style={myStyle}>
      <h1>Biodata:</h1>
      <h1 className="text-danger">Nama saya adalah {props.name}</h1>
      <h1>Usia : {props.age}</h1>
    </div>
  );
};
export default MyBio;
