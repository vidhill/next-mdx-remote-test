function MyButton(props) {
  const clickHandler = (evt) => {
    console.log(evt);
    alert("Client side behaviour");
  };

  return <button onClick={clickHandler}>{props.children || "Default"}</button>;
}

export default MyButton;
