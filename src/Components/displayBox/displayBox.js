import React from "react";
import axios from "axios";
import "./displayBox.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DisplayBox = () => {
  const myState = useSelector((state) => state.changeSearch);
  const [data, changeData] = useState("");

  useEffect(() => {
    if (myState === "") {
    } else {
      axios
        .get(`https://itunes.apple.com/search?term=${myState}`)
        .then((res) => {
          changeData(res.data.results);
          console.log(res.data.results);
        });
    }
  }, [myState]);

  return (
    <div className="Displaydata">
      {data
        ? data &&
          data.length &&
          data.map((val, key) => {
            return (
              <div className="ind" key={key}>
                <img src={val.artworkUrl100} alt=""></img>

                <div>{val.trackName}</div>

                <div>
                  -&nbsp;
                  <a
                    href={
                      val.artistViewUrl
                        ? val.artistViewUrl
                        : val.collectionArtistViewUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {val.artistName}
                  </a>
                </div>

                <a href={val.trackViewUrl} target="_blank" rel="noreferrer">
                  <div className="link">Listen</div>
                </a>
              </div>
            );
          })
        : "Search for Songs"}
    </div>
  );
};

export default DisplayBox;
