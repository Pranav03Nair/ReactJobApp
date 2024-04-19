/*
In main.jsx

1. Import tutorial
2. Add it to reactDOM

*/

export const Tutorial = () => {
  const names = ["Rocky", "Baron", "Richie"];
  const headStyle = {
    color: "red",
    fontSize: "24px",
  };

  return (
    <>
      <p style={headStyle}>Hello</p>
      <div className="text-5xl">Tutorial</div>
      <ul>
        {/* 
        We enclose loop using { } because, looping is JS and not HTML
        */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Tutorial;
