import './BlueButton.css'

interface BlueButtonProps{
    content: string;
}

function BlueButton(props:BlueButtonProps) {
  return (
    <div className='atributes'>
      <button>{props.content}</button>
    </div>
  );
}

export default BlueButton;
