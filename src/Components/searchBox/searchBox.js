import React, { useState } from "react";
import "./searchBox.scss";
import SearchIcon from "@material-ui/core/IconButton/IconButton";
import { useDispatch } from "react-redux";
import { searchQ } from "../actions/action";

function SearchBox() {
  const dispatch = useDispatch();
  const [q, changeQ] = useState("");

  return (
    <div className="SearchBox">
      <div>
        <input
          onChange={(e) => {
            changeQ(e.target.value);
          }}
          type="text"
        ></input>
        <SearchIcon
          onClick={() => {
            dispatch(searchQ(q));
          }}
        />
      </div>
    </div>
  );
}

export default SearchBox;
