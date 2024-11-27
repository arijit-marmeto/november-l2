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
            contentAlign: "center_center",
            textAlign: "center",
        },
        {
            type: "slide",
            preHeading: "Trendy Classics",
            heading: "Discover Signature Look: Fashion Forward and Fabulous!",
            imageUrl: "//veena-theme-fashion.myshopify.com/cdn/shop/files/4.png",
            description: "",
            buttonLink: "/collections",
            buttonLabel: "Shop Now",
            contentAlign: "center_left",
            textAlign: "center",
        },
        {
            type: "slide",
            preHeading: "Modern Elegance",
            heading: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
            imageUrl: "//veena-theme-fashion.myshopify.com/cdn/shop/files/3.png",
            description: "",
            buttonLink: "/collections",
            buttonLabel: "Explore Now",
            contentAlign: "center_right",
            textAlign: "center",
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
                <li >${slide.preHeading}</li>
            </ul>
            <h2 style="text-align:${slide.textAlign}">${slide.heading}</h2>
            <div>
                <a  href="${slide.buttonLink}" target="_blank" class="button">
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
document.getElementById('dynamicBox').addEventListener('change', function () {
    const selectedValue = this.value; 
    const selectedTextAlign = document.getElementById('dynamicText').value; 

    const contentElements = document.querySelectorAll('.splide_content');

   
    contentElements.forEach(element => {
        element.classList.remove(
            'top_left', 'top_center', 'top_right',
            'center_left', 'center_center', 'center_right',
            'bottom_left', 'bottom_center', 'bottom_right'
        );
    });

    
    contentElements.forEach(element => {
        // Set position alignment class
        switch (selectedValue) {
            case '1':
                element.classList.add('top_left');
                break;
            case '2':
                element.classList.add('top_center');
                break;
            case '3':
                element.classList.add('top_right');
                break;
            case '4':
                element.classList.add('center_left');
                break;
            case '5':
                element.classList.add('center_center');
                break;
            case '6':
                element.classList.add('center_right');
                break;
            case '7':
                element.classList.add('bottom_left');
                break;
            case '8':
                element.classList.add('bottom_center');
                break;
            case '9':
                element.classList.add('bottom_right');
                break;
            default:
                break;
        }

        
        element.querySelectorAll('h2, ul').forEach(child => {
            child.style.textAlign = selectedTextAlign;
        });
    });
});

