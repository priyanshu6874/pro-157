AFRAME.registerComponent("tour", {
  init: function () {
    this.posterContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "blue-lock",
        title: "Blue Lock",
        url: "./assets/blue.jpg",
      },
      {
        id: "kaiju-no-8",
        title: "Kaiju no 8",
        url: "./assets/kaiju.webp",
      },

      {
        id: "komi-can't-comunicate",
        title: "Komi can't comunicate",
        url: "./assets/komi.jpg",
      },
      {
        id: "black-clover",
        title: "Black clover",
        url: "./assets/clover.jpe",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id);
      // Thumbnail Element
      const poster=this.createPoster(item);
      borderEl.appendChild(poster);
      // Title Text Element
      const titleEl=this.createTitleEl(position,item);
      borderEl.appendChild(titleEl);

      this.posterContainer.appendChild(borderEl);
    }
  },
  createBorder:function (position,id){
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:22,
      height:30
    });
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{
      color:"#ffffff",
      opacity:1
    });

    return entityEl;
  },
  createPoster:function (item){
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:28
    });
    entityEl.setAttribute("position",{x:0,y:0,z:0.1});
    entityEl.setAttribute("material",{src:item.url});

    return entityEl;
  },

  createTitleEl: function (position,item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"centre",
      width:70,
      color:"#e65100",
      value:item.title
    });
    const elPosition =position;
    elPosition.y= -20;
    elPosition.x=elPosition.x+27;
    entityEl.setAttribute("position",elPosition);
    entityEl.setAttribute("visible",true);

    return entityEl;
  },
});
