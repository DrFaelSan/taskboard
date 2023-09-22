import { ColorEnum } from "../../../../enums/ColorEnum";
type LabelProps = {
  color: ColorEnum;
  isDragging: boolean;
}
export default function Label({ color, isDragging } : LabelProps) {

  const Variants : { [cor: string ]: string } = {
    puple : 'bg-violet-400 hover:bg-violet-300',
    cyan: 'bg-cyan-400 hover:bg-cyan-300',
    green: 'bg-green-400 hover:bg-green-300',
    red: 'bg-red-400 hover:bg-red-300',
    yellow: 'bg-amber-400 hover:bg-amber-300'
  };

  const colorClasses = Variants[color];
  return (
    <span  
    className={`${colorClasses} w-2 h-2 rounded-sm inline-block mr-1 ${isDragging? 'opacity-0': ''}`} 
    />
  )
}
