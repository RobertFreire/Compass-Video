import './BlueButton.css'

interface BlueButtonProps{
    content: string;
    onClick: () => void;
}

function BlueButton(props:BlueButtonProps) {
  return (
    <div className='atributes'>
      <button onClick={props.onClick}>{props.content}</button>
    </div>
  );
}

export default BlueButton;
