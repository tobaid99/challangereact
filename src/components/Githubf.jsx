import React, {useEffect, useState} from "react";
import axios from "axios";

function Githubf(){
    const [users , setUsers]= useState([]);
    const [search, setSearch]= useState("");

    


useEffect ( () => {
    const githubId = "bd39fe602db3e57cd86a";
    const githubSecret ="e4cc41409da6ad6542953d1731480da6c7629a0c";

    if(search){
        axios
        .get(`https://api.github.com/users/${search}?client_id=${githubId}&client_secret=${githubSecret}&sort=created`)
        .then((res) => {
            setUsers([res.data]);
        } )
        .catch((err)=> {
            console.error("Api wrong", err)
            setUsers([]);
        }  );
    }else {
        setUsers([]);
    }

},[search] );



return (
    <div className="App">
        <h1> User Github Page</h1>
        <label htmlFor=""> Search</label>
        <input  name="search" value={search} onChange={(e)=> setSearch(e.target.value)} />
        <ul>
            {users.map((user)=>(
                <li key={user?.id}>
                    <img src={user?.avatar_url} alt={`${user?.login}'s avatar`} />
                        <p> User Name : {user?.login}</p>
                        <p> Github Account Link {user?.url}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}
export default Githubf;

