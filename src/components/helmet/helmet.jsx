const Helmet = (props) => {
  console.log(props, "helmet");
  document.title = "Car Rent Services -" + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
