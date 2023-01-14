import { List } from "./List";
export function Lists(){
    const defaults =[
        "Science",
        "Travel",
        "Humor"
      ];
    return <div>{defaults.map((list, i)=><List listName={list} key ={i}/>)}</div>
}