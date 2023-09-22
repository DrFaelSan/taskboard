import { useState } from "react";
import { ListItem, loadLists } from '../../services/mock.api.service';
import List from "../List";
import { produce } from 'immer';

import BoardContext from "../../contexts/board.context";

export default function Board() {
  const [lists, setLists] = useState<ListItem[]>(loadLists());

  function move(fromList: number, toList: number , from: number, to: number) {
    setLists(produce<ListItem[]>(lists, (draft: ListItem[]) => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);  
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move}}>
       <div className="flex flex-row py-8 h-[calc(100%-5rem)] divide-x">
      {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)}
      </div>
    </BoardContext.Provider>
   
  )
}
