import React from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <input
      className={css.input}
      type="text"
      name="search"
      placeholder="Search notes"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
