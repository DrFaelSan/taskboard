import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { CardItem } from "../../services/mock.api.service";
import Label from "./components/Label";
import { useRef, useContext } from 'react';
import BoardContext from '../../contexts/board.context';

type CardProps = {
  data: CardItem;
  index: number;
  listIndex: number;
}

export default function Card({ data, index, listIndex } : CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useContext(BoardContext);

  const [{isDragging}, dragRef] = useDrag({
    type: "CARD",
    item: {
      listIndex,
      index,
      type: "CARD" 
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor: DropTargetMonitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));
   return (
    <div ref={ref} className={isDragging ? 
      `relative cursor-grabbing pt-8  mb-2 p-4 rounded-none bg-transparent shadow-none border-dashed border-2 border-[rgba(0,0,0,0.2)]`: 
      `relative bg-white rounded mb-2 p-4 shadow shadow-[rgba(192,208,230,0.8)] border-t-[20px] border-solid border-[rgba(230,236,245,0.4)] cursor-grab`}>
      <header className={`absolute top-[-22px] left-4 ${isDragging ?'opacity-0':''}`} >
        {data.labels.map((label) => <Label key={label} color={label} isDragging={isDragging} /> )}
      </header>
      <p className={`font-medium leading-5 ${isDragging ?'opacity-0':''}`}>{data.content}</p>
      {data.user && <img src={data.user} alt="avatar" className={`w-6 h-6 rounded-sm mt-1 ${isDragging ?'opacity-0':''}`}/>}
    </div>
  )
}
