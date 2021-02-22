window.addEventListener('load',(event) =>{

    const images = document.querySelectorAll("[src]");

    function preloadImages(img) {
        console.log("Trying to load"+img);
        const src = img.getAtribute("src");

        if(!src){
            return;
        }

        img.src = src;
    }
    
    const imgOptions = {
        treshold:0,
        rootMargin: "0px 0px -200px 0px"
    }

    const imgObserver = new IntersectionObserver((entries,imgObserver) =>{
        console.log(entries);
            entries.forEach(entry=>{
                if(!entry.isIntersecting){
                    return;
                }

                else{
                    preloadImage(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            })
    },imgOptions);
    images.forEach(image=>{
        imgObserver.observe(img);
    })

});
