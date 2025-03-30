document.addEventListener("DOMContentLoaded", async function () {
    const gallery = document.getElementById("gallery");
    const imageFolder = "images/";

    async function fetchImages() {
        try {
            const response = await fetch(imageFolder);
            const data = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const images = [...doc.querySelectorAll("a")]
                .map(a => a.href)
                .filter(href => href.match(/\.(jpe?g|png|gif|webp)$/i));

            images.forEach(imgSrc => {
                let imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                imgElement.classList.add("w-full", "h-auto", "rounded-lg", "shadow-md");
                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    fetchImages();
});
