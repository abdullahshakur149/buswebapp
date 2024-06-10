// Functions for Modal Buttons (Projects Page)

document.addEventListener("DOMContentLoaded", function() {
    const ppImages = document.querySelectorAll(".pp > img");

    ppImages.forEach(function(ppImage) {
        ppImage.addEventListener("click", function() {
            const pBackground = getComputedStyle(this.closest(".p")).backgroundImage;
            const modal = document.createElement("div");
            modal.classList.add("modal");
            const modalContent = document.createElement("div");
            modalContent.classList.add("modal-content");
            const modalImage = document.createElement("img");
            modalImage.src = pBackground.slice(5, -2); // Remove 'url(' and ');' from background image

            modalImage.classList.add("modal-image");
            modalContent.appendChild(modalImage);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            modal.addEventListener("click", function() {
                document.body.removeChild(modal);
            });

            modal.style.display = "block"; // Display the modal
        });
    });
});
