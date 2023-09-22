import { createContext } from "react";
import { ListItem } from "../services/mock.api.service";


type boardContextData = {
  lists: ListItem[],
  move: (fromList: number, toList: number, from: number, to: number) => void;
}

export default createContext<boardContextData>({} as boardContextData);