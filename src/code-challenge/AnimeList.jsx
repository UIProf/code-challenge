import React,  { useEffect, useState } from 'react';
import { Card } from './Card';

import { filterAndSortAnimeList } from './helpers';


const AnimeList = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    getAnimieList();
  }, []);

  const filterlist = filterAndSortAnimeList(search, list);

  const getAnimieList = async () => {
    const response = await fetch("http://localhost:3000/list");
    const data = await response.json();
    setList(data.data)
  }

  return (
    <div className="anime-list">
      <h1>Anime List</h1>
        <label role="textbox" htmlFor="Search">Search</label>
        <input type="text" value={search} id="Search" name="Search" onChange={(e) => setSearch(e.target.value)} />
      <div className="anime-list-cards">
        {
          filterlist && filterlist.map( list => <Card name={list.anime_name} image={list.anime_img} />)
        }
      </div>
    </div>
  );
};



export default AnimeList;
