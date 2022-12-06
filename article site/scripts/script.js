const baseurl ="https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

let getAllNews = async() =>{
try{
    const response = await fetch(`${baseurl}/news`);
    const data = await response.json();
    console.log(data);
    displayNews(data);
}
catch(error){
    console.log(error)
}
}
const displayNews = (data) =>{
    data.map((item) => {
        let articleContainer = document.getElementById('articleContainer');
        let article = document.createElement('div');
        let articleImg = document.createElement('img');
        let title = document.createElement('h4');
        let link = document.createElement('a');

    // setting title for the article

    title.innerText = item.title;

    // setting image
    articleImg.src = item.avatar;
    articleImg.alt = 'article Img';
    articleImg.width = '200';
    articleImg.height = '300';


    articleImg.onerror =()=>{
        articleImg.onerror = null;
        articleImg.src ='../assets/images/img.jpg'

    }
    // generating and setting the links

    link.href =`/pages/content.html?id=${item.id}`;
    link.target ='_blank';
    link.innerText = 'Read More...'

    // appear all article content

    article.appendChild(articleImg);
    article.appendChild(title);
    article.appendChild(link);

    articleContainer.appendChild(article);
    })


}

window.onload = getAllNews();