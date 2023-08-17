import styles from "./MyButton.module.css";

function MyButton(props) {
  const clickHandler = (evt) => {
    console.log(evt);
    alert("Client side behaviour");
  };

  return (
    <button className={styles.myButton} onClick={clickHandler}>
      {props.children || "Default"}
    </button>
  );
}

export default MyButton;
