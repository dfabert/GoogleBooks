import React from "react";
import API from "../utils/API";
import { Input } from "../components/form";

function Search() {
 

  return (
    <div>
        Search Page
        <form>
            <Input
              name='title'
              placeholder='enter title'
            />
        </form>
    </div>    
  );
}

export default Search;