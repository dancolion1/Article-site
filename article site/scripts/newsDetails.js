var url_string = window.location.href;
var url = new URL(url_string)
const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const get_Id = () => {
    return url.searchParams.get("id");
};

const getSingleNews = async (id) => {
    try{
        const response = await fetch(`${base_url}/news/${id}`);
        const newsData = await response.json();
        displayNewsDetails(newsData);
    
    }
    catch(error){
        console.log(error);
    }
};

const displayNewsDetails = (data) =>{
    var title = document.getElementById("title");
    var url = document.getElementById("url");
    var author = document.getElementById("author");
    
    title.innerText = data.title;
    author.innerText = `PUBLISHED by ${data.author}`;
    url.innerText = data.url;
};

window.onload = getSingleNews(get_Id());