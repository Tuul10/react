import styles from "../components2/Input.module.css";

export default function Input(props) {
  const { placeholder } = props;
  return <input className={styles.input} placeholder={placeholder} />;
}
