import { useState } from "react";
import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";
import { LoadingAnim } from "./LoadingAnim";
import ReactStars from "react-rating-stars-component";
export function Results() {
  const { key } = useParams();
  const [page, setPage] = useState(0);
  const { loading, data, error } = useFetch(
    `https://www.googleapis.com/books/v1/volumes?q=${key}&startIndex=${
      page * 10
    }&key=AIzaSyBpfwqJZX9L0C2FsTz8HJP1aRH1AkruTAc`,
    page
  );
  if (loading)
    return (
      <div className="vertCent">
        <LoadingAnim />
      </div>
    );
  if (error) return <div>Some Error Occured.</div>;
  if (data) {
    return (
      <>
        {data.items?.map((vol, i) => (
          <>
            <div className="resultTile" key={i}>
              <img
                className="bookImg2"
                src={
                  vol.volumeInfo.imageLinks
                    ? vol.volumeInfo.imageLinks.thumbnail
                    : "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"
                }
                alt="book display"
              ></img>
              <div>
                <div className="bookTitle">
                  <br />
                  {vol.volumeInfo.title}
                </div>
                {vol.volumeInfo.authors?.map((author, ai) => (
                  <div className="authName" key={ai}>
                    {author}
                  </div>
                ))}
                <div className="rating">{
                vol.volumeInfo.averageRating?<ReactStars isHalf={true} size={20} edit={false} value={vol.volumeInfo.averageRating}/>:"Unrated"
                }</div>
              </div>
            </div>
            <hr style={{ width: "95vw" }} />
          </>
        ))}
        <center style={{ padding: "2em" }}>
          <div className="numWrap">
            <button
              className="page"
              style={{ background: "none", border: "none", color: "#888" }}
              onClick={() => {
                if (page - 1 < 0) return;
                const pg = page - 1;
                setPage(pg);
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
              return (
                <div
                  className="page Nums"
                  style={
                    page === i ? { background: "#202123", color: "white" } : {}
                  }
                  key={i}
                >
                  <p
                    style={{
                      position: "absolute",
                      top: "-0.75em",
                      left: "0.75em",
                    }}
                  >
                    {v}
                  </p>
                </div>
              );
            })}
            <button
              className="page"
              style={{ background: "none", border: "none", color: "#888" }}
              onClick={() => {
                if (page >= 8) return;
                const pg = page - 1 + 2;
                setPage(pg);
                window.scrollTo(0, 0);
              }}
            >
              Next
            </button>
          </div>
        </center>
      </>
    );
  }
}
