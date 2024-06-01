AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        avengers: {
          banner_url: "./assets/avengers.jpg",
          title: "Avengers",
          released_year: "1963",
          description:
            "The Avengers are a team of fictional superheroes from the Marvel Comics portfolio. They usually operate independently but occasionally assemble as a team to tackle especially formidable villains. The team began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.",
        },
        flash: {
          banner_url: "./assets/flash.jpg",
          title: "Flash",
          released_year: "1940",
          description:
            "The Flash is an ongoing American comic book series featuring the DC Comics superhero of the same name. Throughout its publication, the series has primarily focused on two characters who have worn the mantle of the Flash: Barry Allen, the second Flash (1959–1985, 2010–2020), and Wally West, the third Flash (1987–2008, 2021–present).",
        },
        "action-comics": {
          banner_url: "./assets/action-comics.jpg",
          title: "Action-Comics",
          released_year: "1938",
          description:
            "Action Comics is an American comic book/magazine series that introduced Superman, one of the first major superhero characters. The publisher was originally known as Detective Comics Inc., which later merged into National Comics Publications (later National Periodical Publications), before taking on its current name of DC Comics. Its original incarnation ran from 1938 to 2011 and stands as one of the longest-running comic books with consecutively numbered issues. The second volume of Action Comics beginning with issue #1 ran from 2011 to 2016. Action Comics returned to its original numbering beginning with issue #957 (Aug. 2016).",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });