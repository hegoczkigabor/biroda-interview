import { FC, useState } from "react";

import { Button } from "components/Button/Button";
import { TextField } from "components/TextField/TextField";

export interface SearchProps {
  placeholder: string;
  onSearch: (filter: string) => void;
}

export const Search: FC<SearchProps> = ({ onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <TextField
        placeholder={placeholder}
        onChange={(value) => setSearchValue(value)}
        onEnterKeyPressed={() => onSearch(searchValue)}
      />
      <Button onClick={() => onSearch(searchValue)} label="Search" />
    </>
  );
};
