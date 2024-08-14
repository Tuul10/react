import styles from "./Background.module.css";
import Button from "./Button";
import Input from "./Input";

const Background = () => {
  return (
    <div className={styles.background}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <div className={styles.flex}>
        <Input placeholder="Fist name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" />
      </div>
      <Button />
    </div>
  );
};
export default Background;
