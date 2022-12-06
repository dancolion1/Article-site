const baseurl = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const getAllNews = async () => {
    try{
        const response = await fetch(`${baseurl}/news`);
        const data = await response.json();
        console.log(data);
        displayNews(data);
    }catch(error){
        console.log(error);
    }
}

const displayNews = (data) =>{
    data.map((item) => {
        let articleContainer = document.getElementById('articleContainer');

        let article = document.createElement("div");
        let articleImage = document.createElement("img");
        let title = document.createElement("h4");
        let link = document.createElement("a");

        title.innerText = item.title;

        articleImage.src = item.url;
        articleImage.alt = "article image";
        articleImage.width = "200";

articleImage.oneerror = () => {
    articleImage.oneerror = null;
    articleImage.src= '../images/img.jpg'

};


        link.href = `/pages/content?id=${item.id}`;
        link.target = "_blank";
        link.innerText = "Read more...";

        article.appendChild(articleImage);
        article.appendChild(title);
        article.appendChild(link);

        articleContainer.appendChild(article);
    })
}

window.onload = getAllNews();