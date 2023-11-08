import styles  from './BlueButton.module.css'

interface BlueButtonProps{
    content: string;
    onClick: () => void;
}

function BlueButton(props:BlueButtonProps) {
  return (
    <div className={styles.atributes}>
      <button className={styles.buttonBlue} onClick={props.onClick}>{props.content}</button>
    </div>
  );
}

export default BlueButton;
