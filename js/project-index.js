const getDataMain = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((json) => {

        let projects = json.slice(0,3)
    //    console.log(projects);
    let str =""
    
    projects.forEach((element,index) => {
      
        str+= 
        `
        <div class="collection-item">
        <div class="project-card">
          <div class="project-image">
            <img class="project-card-image" src="/assets/projects-section/${index+1}.jpg" alt="">
          </div>
          <div class="project-content">
            <div class="project-text">
              <div class="project-title" id="project-title">${element.title.substring(0,40)}</div>
              <div class="project-title project-description">${element.body}</div>
              <a class="project-link" href="./html/projects/simplify.html" >Learn More</a>
            </div>
          </div>
        </div>
      </div>
        
        `
        
    });

    document.querySelector(".collection-list").innerHTML = str

    })

  }

  getDataMain()