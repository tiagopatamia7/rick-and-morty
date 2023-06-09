
import styled from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
  const {onSearch} = props;
const [id, setId]= useState('')

const handleChange =(event) => {
setId(event.target.value)

};

  return (
    <div className= {styled.fondo}>
      <input type="search" className={styled.searchInput} onChange={handleChange} />
      <button   className={styled.searchButton} onClick ={() =>onSearch(id)}>Agrega</button>
    </div>
  );
}
