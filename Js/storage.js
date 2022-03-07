const modal = document.querySelector(".modal-overlay");

const defLanguage = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("language", "en");
        closeModal();
    })
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("language", "es");
        closeModal();
    })
}

const closeModal = () => {
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => modal.style.display = "none", 1000);
};

const language = localStorage.getItem("language");

if (language === null) defLanguage();
else {
    console.log(`Language: ${language}`);
    modal.style.display = "none";
}