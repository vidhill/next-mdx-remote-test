function MyButton(props) {
  const clickHandler = (evt) => {
    console.log(evt);
  };

  return <button onClick={clickHandler}>{props.children || "Default"}</button>;
}

export default MyButton;
