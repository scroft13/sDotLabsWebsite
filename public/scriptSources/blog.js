const blogCenter = document.querySelector(".blog-center");

const blogpreview = [
  {
    title: "How to Create a VS Code Theme",
    date: 10 / 20 / 2020,
    link: "Portfolio/blogs/vscode.html",
    date: '<time datetime="2020-10-21">Oct 21, 2020</time>',
    linkdesc: "Read More",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1920px-Visual_Studio_Code_1.35_icon.svg.png",
    desc: `A complete beginners guide to creating your own VS Code theme on the Mac OS.`,
  },
];
const displayBlogItems= (blogItems) => {
  let displayBlog = blogItems.map(function (item) {
    return `
          <div class="blog-card">
              <div class="blog-title">
                     <h4>${item.title}</h4>
              </div>
              <div class="blog-info">
                  <img class="blog-photo" src=${item.img} alt=${item.title}/>     
                  <div class="blog-description">
                      <div class="blog-text-div>
                          <p class="blog-text">${item.desc}</p>
                      </div>
                      <div class="date">Written on ${item.date}</div>
                      <div class="blog-link"> 
                        <a href="${item.link}" target="_blank" class="link">&lt Read More &gt</a>
                      </div>   
                  </div>
                  
              </div>
          </div>`;
  });
  displayBlog = displayBlog.join("");
  blogCenter.innerHTML = displayBlog;
}
