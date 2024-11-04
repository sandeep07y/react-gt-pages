import styles from "./Button.module.css";
interface Props {
  children: String;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
