const apiKey="42f12383d1c34066bc2fe87a587db1f0";

const blogContainer=document.getElementById("blog-container");

const searchField=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

 
async function fetchRandomNews()
{
    try{
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`

         const response=await fetch(apiUrl)

         const data=await response.json();

         console.log(data);

         return data.articles;

    }catch(error)
    {
        console.log(error);
    }
}

searchButton.addEventListener("click",()=>{

    const query=searchField.ariaValueMax.trim();

    if(query!=="")
        {
            try
            {

            }catch(error)
            {
                    
            }
        }
})
function displayBlocks(articles)
{
    blogContainer.innerHTML="";
    articles.forEach((article) => {
        const blogCard=document.createElement("div");
        blogCard.classList.add("blog-card");

        const img=document.createElement("img");
        img.src=article.urlToImage;
        img.alt=article.title;

        const title=document.createElement("h2");
        // title.textContent=article.title;
        const Trunk=article.title.length>30? article.title.slice(0,30)+"...": article.title; 
        title.textContent=Trunk; 

        const description=document.createElement("p");
        description.textContent=article.description;
        

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);

        blogContainer.appendChild(blogCard);

        blogCard.addEventListener("click",()=>{

            window.open(article.url, "_blank");

        })
        


        
    });

}



(async ()=>
{
    try
    {
       const articles=await fetchRandomNews();
       displayBlocks(articles);
       
    }catch(error)
    {
        console.log(error);
    }
})();
