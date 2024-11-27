const sectionData = {
    perPage: 1,
    blocks: [
        {
            type: "slide",
            preHeading: "Women's Apparel",
            heading: "Elevate your wardrobe with our limited-time fashion offer!",
            imageUrl: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png",
            description: "",
            buttonLink: "/collections",
            buttonLabel: " Explore More",
            contentAlign: "left-start | ... 9 positions",
            textAlign: "center | left | right",
        },
        {
            type: "slide",
            preHeading: "Trendy Classics",
            heading: "Discover Signature Look: Fashion Forward and Fabulous!",
            imageUrl: "//veena-theme-fashion.myshopify.com/cdn/shop/files/4.png",
            description: "",
            buttonLink: "/collections",
            buttonLabel: "Shop Now",
            contentAlign: "left-start | ... 9 positions",
            textAlign: "center | left | right",
        },
        {
            type: "slide",
            preHeading: "Modern Elegance",
            heading: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
            imageUrl: "//veena-theme-fashion.myshopify.com/cdn/shop/files/3.png",
            description: "",
            buttonLink: "/collections",
            buttonLabel: "Explore Now",
            contentAlign: "left-start | ... 9 positions",
            textAlign: "center | left | right",
        },
    ],
};

const renderBanner = () => {
    const ulElement = document.querySelector(".splide__list");

    sectionData.blocks.forEach((slide,index) => {
        const liElement = document.createElement("li");
        liElement.classList.add("splide__slide");

        const imgElement = document.createElement("img");
        imgElement.setAttribute("srcset", slide.imageUrl);
        imgElement.setAttribute("alt", "Slide Image"); 

        const contentElement = document.createElement("div");
        contentElement.classList.add("splide_content");
        if(index==1){
            contentElement.classList.add("left_start");
        }
        if(index==2){
            contentElement.classList.add("left_center");

        }
        contentElement.innerHTML = `
            <ul>
                <li>${slide.preHeading}</li>
            </ul>
            <h2>${slide.heading}</h2>
            <div>
                <a href="${slide.buttonLink}" target="_blank" class="button">
                    <span>${slide.buttonLabel}</span>
                </a>
            </div>
        `;

        liElement.appendChild(imgElement);
        liElement.appendChild(contentElement); 
        ulElement.appendChild(liElement); 
    });
};

document.addEventListener("DOMContentLoaded", function () {
renderBanner();
    

    const splide = new Splide(".splide", {
        type: "loop",
        perPage: sectionData.perPage,
    });
    
      splide.on("moved", function (newIndex) {
        console.log(newIndex);
        
      
    });
    splide.mount();
});
