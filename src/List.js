import { useFetch } from "./useFetch";
import { isMobile } from "react-device-detect";
import React from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LoadingAnim } from "./LoadingAnim";
export function List({listName}){
    const {loading, data, error}=useFetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=bN980dl0Z9QqZoDfFL2KXLtYY8pvurLF`);
    if(loading) return <div><LoadingAnim /></div>;
    if(error) return <div>Some Error Occured.</div>
    if(data){
    return <div className="scrollWrapper"><div className="listName">{listName}</div>
    <ScrollMenu LeftArrow={!isMobile?<LeftArrow/>:null} RightArrow={!isMobile?<RightArrow/>:null}>
    <div className="space"></div>
    {data.results?.books?.map((book, i)=><img key = {i} className = "bookImg" src ={book.book_image} alt="https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"/>
    )}</ScrollMenu></div>;
  }
}
function LeftArrow(){
    const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button style={{opacity:isFirstItemVisible?0:0.8}} className="larrow" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      &lt;
    </button>
  );
}
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <button className="rarrow" style={{opacity:isLastItemVisible?0:0.8}} disabled={isLastItemVisible} onClick={() => scrollNext()}>
        &gt;
      </button>
    );
  }