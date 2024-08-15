import styles from "./Background.module.css";
import Button from "./Button";
import Input from "./Input";

const inputData = ["Firstname", "Lastname", "Email"];

const Background = () => {
  return (
    <div className={styles.background}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <div className={styles.flex}>
        {inputData.map((input, index) => {
          return <Input key={index} placeholder={input} />;
        })}
      </div>
      <Button />
    </div>
  );
};
export default Background;
