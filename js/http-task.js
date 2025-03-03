//здійснити запит на сервіс jsonplaceholder,
//щоб отримати масив зі 100 постів 
//вивести на екран їх у вигляді стилізованих новин

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(json => {
//         const list = document.querySelector(".posts-list");
//         json.forEach((item, index) => {
//             //creating elements
//             const post = document.createElement("li");
//             const postIndex = document.createElement("span");
//             const postTitle = document.createElement("h4");
//             const postText = document.createElement("p");
//             const postReadMoreLink = document.createElement("a");
//             //addain classes
//             post.classList.add("post-list-item");
//             postIndex.classList.add("post-index");
//             postTitle.classList.add("post-title");
//             postText.classList.add("post-text");
//             postReadMoreLink.classList.add("post-link");
//             //updatinf content 
//             postIndex.innerHTML = index + 1;
//             postTitle.innerHTML = item.title;
//             postText.innerHTML = item.body;
//             postReadMoreLink.innerHTML = "Read more";
//             //inserting item into the list
//             post.append(postIndex, postTitle, postText, postReadMoreLink)
//             list.appendChild(post);
//         })
//     })

//розмітка через map
//так коротший і чистіший код

fetch('https://jsonplaceholder.typicode.com/photos') 
    .then(response => response.json())
    .then(json => {
        const list = document.querySelector(".posts-list");
        const postsMarkUp = json
            .map((item, index) => `
            <li class="post-list-item">
                <span class="post-index">${index + 1}</span>
                <h4 class="post-title">${item.title}</h4>
                <p class="post-text">${item.body || 'No description available'}</p>
                <a href="#" class="post-link">Read more</a>
            </li>
        `).join("");
        list.innerHTML = postsMarkUp;
    })
    .catch(error => console.error("Error fetching posts:", error));


    