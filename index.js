let movies = [
    {name: "Mahabharat",

    des:
    "The mother of all wars,the epitome of all rivalries,the cauldron of emotions,insecurities,jealousies,and power play - Mahabharat!",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9"

    },

    {name: "Chhichhore",

    des:
    "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8929/1428929-i-0d0b15f61010"

    },

  
    {name: "Jolly LLB 2",

    des:
    "A small-time lawyer tricks an innocent woman to make it big. However, a life-changing incident leaves him fighting an earnest battle for justice.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8998/1368998-i-6a1d1d26b3e3"

    },

    {name: "Mission Mangal",

    des:
    "Based on the true story of India's finest scientists who rose above hardships and failures to make us the only country to reach Mars in its first attempt.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6502/1366502-i-d657e17c33d4"

    },

    {name: "Secret Invasion",

    des:
    "Nick Fury learns of a clandestine invasion of Earth by a faction of shapeshifting Skrulls. Together with his allies, he must race against time to save humanity.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/302/1540302-i-2c762a8182d3"

    },

    {name: "Guardians Of The Galaxy VOL:3",

    des:
    "The band of heroic renegades embark on an action-packed mission to protect one of their own. And a new force threatens to bring the Guardians down for good.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4"

    },

   {name: "Avatar The Way of Water",

   des:
    "Set more than a decade after the first film, dive into the story of the Sully family; the lengths they go to keep each other safe and the tragedies they endure.",

    image: "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/219/1530219-i-898c101fb615"

   },

    {
      name: "Loki",
  
      des:
        "Loki is an American web television series, based on the Marvel Comics character of the same name. The series is a sequel to Avengers: Endgame.",
  
      image: "images/slider 1.PNG"
    },
    {
        name: "Falcon and the Winter Soldier",
    
        des:
          "Following the events of 'Avengers: Endgame,' Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
    
        image: "images/slider 2.PNG"
      },
    {
      name: "Wanda vision",
  
      des:
        "Wanda Maximoff and Vision two super-powered beings living idealized suburban lives begin to suspect that everything is not as it seems.",
  
      image: "images/slider 3.PNG"
    },
    {
      name: "Raya and the last dragon",
  
      des:
        "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
  
      image: "images/slider 4.PNG"
    },
    {
      name: "Luca",
  
      des:
        "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
  
      image: "images/slider 5.PNG"
    }
  ];
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //tracker
  const createslide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    //creating DOM elementes
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  for (let i = 0; i < 3; i++) {
    createslide();
  }
  setInterval(() => {
    createslide();
  }, 3000);
  
  //video cards
  const videocards = [...document.querySelectorAll(".video-card")];
  videocards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });