
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const loadImagesBtn = document.querySelector(".loadImagesBtn");
  console.log(loadImagesBtn);

    const optinons = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  

    function handleIntersection(ty, obs) {
        ty.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          obs.unobserve(img);
        }
      });
    }
  
    
    const obServer = new IntersectionObserver(handleIntersection, optinons);


    const images = document.querySelectorAll("#imageContainer img[data-src]");
    images.forEach(img => obServer.observe(img));
  
 
    loadImagesBtn.addEventListener("click", pp);
  
function pp() {
    {
        images.forEach(img => {
          if (!img.src && img.dataset.src) {
            img.src = img.dataset.src;
            obServer.unobserve(img);
          }
        });
      }
}


  });










  
  