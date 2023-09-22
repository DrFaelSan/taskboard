import { Plus } from 'lucide-react';
import Card from '../Card';
import { CardItem, ListItem } from '../../services/mock.api.service';

type ListProps = {
  data: ListItem;
  index: number;
}

export default function List({data, index: listIndex} : ListProps) {
  const {title, creatable, cards, done } = data;
  const opacityClass = done ? 'opacity-60' : 'opacity-100';
  
  return (
    <div className={`px-4 h-full grow-0 shrink-0 basis-80 ${opacityClass}`}>
      <header className='flex flex-row justify-between items-center h-10'>
        <h2 className='font-medium text-lg py-2'>{title}</h2>
       {creatable && (
         <button type='button' className='h-10 w-10 flex items-center justify-center rounded-[18px] bg-[#3b5bfd] border-none cursor-pointer p-2 text-white'>
          <Plus size={20}/>
         </button>
       )}
      </header>
      <ul className='mt-7'>
        {cards.map((card: CardItem, index:number) => 
          <Card 
            key={card.id} 
            index={index} 
            data={card}
            listIndex={listIndex}
          />)}
      </ul>
    </div>
  )
}
