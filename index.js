// Ejmeplo1
axios({
  method: "GET",
  url: ``,
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

// Ejemeplo 2
axios({
  method: "GET",
  url: ``,
})
  .then((res) => {
    const list = document.getElementById("list");
    const fragment = document.createDocumentFragment();
    for (const userInfo of res.data) {
      const listItem = document.createElement("LI");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      fragment.appendChild(listItem);
    }
    list.appendChild(listItem);
  })
  .catch((err) => {
    console.log(err);
  });

// Ejemplo 3
function connection(apiUrl) {
  axios({
    method: "GET",
    url: apiUrl,
  })
    .then((res) => {
      data = res.data.articles;
      this.articles = data.map((article) => {
        articles.push({
          img: article.urlToImage,
          url: article.url,
          title: article.title,
          description: article.description,
        });
      });
      allowsClicks = articles.length / 4 - 1;
      fillNews();
      articles = [];
    })
    .catch((err) => console.log(err));
}

// Ejemplo 4
const getNombreAxios = async (idPost) => {
  try {
    const resPost = await axios(`${url}/${idPost}`)
    const resUser = await axios(`${url}/${resPost.data.id}`)
    console.log(resUser.data.name);
  } catch (error) {
    console.log(error);
  }
};

getNombreAxios(6);