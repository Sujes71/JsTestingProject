const zona = document.querySelector(".zona");

zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(e.target, "#444");

});
zona.addEventListener("dragleave", e => {
    e.preventDefault();
    changeStyle(e.target, "#888");

});
zona.addEventListener("drop", e => {
    e.preventDefault();
    changeStyle(e.target, "#888");
    cargarArchivo(e.dataTransfer.files[0]);
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsText(ar);
    //!Barra de carga
    reader.addEventListener("progress", e => {
        let carga = Math.round(e(e.loaded / ar.size) * 100);
        zona.textContent = `${carga / 3.6}%`;
    });
    reader.addEventListener("load", e => {
        document.querySelector(".result").textContent = e.currentTarget.result;
    });
    //!Al finalizar la carga
    reader.addEventListener("loadend", e => {
        changeStyle(zona, "#4f9");
    });
}