export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '25a7a1cb23msh5732af2b13a44bap195fd7jsn2f729872ccec',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '25a7a1cb23msh5732af2b13a44bap195fd7jsn2f729872ccec',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}


