export const formatName = (name) => {
    const stringName = name.trim().replace(/\_+/g, " ");
    return stringName.replace(
    /\w\S*/g,
    (name) => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()).replace(/\s+/g, " ");
};

export const filterAndSortAnimeList = (search, list) => {
    let filterList;
    if(search === '') {
        filterList = list;
    } else {
        filterList = list.filter(item => formatName(item.anime_name).toLowerCase().indexOf(formatName(search).toLowerCase()) > -1);
    }

    return filterList.sort((a,b) => a.anime_name.localeCompare(b.anime_name));
};
