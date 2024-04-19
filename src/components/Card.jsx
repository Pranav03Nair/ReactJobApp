// 'children' is the reserved prop name for any content passed in openin and closin tags of a component
const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
