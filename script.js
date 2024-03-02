document.addEventListener("DOMContentLoaded", function () {
    fetch("vebs.json")
        .then((response) => response.json())
        .then((data) => {
            const verbs = data.verbs;

            const verbsContainer = document.getElementById("verb-container");
            verbs.forEach((verb) => {
                const verbElement = document.createElement("div");
                verbElement.classList.add("verb-item");
                
                const strongElement = document.createElement("div");
                strongElement.textContent = verb.verb;
                verbElement.appendChild(strongElement);
                
                verbsContainer.appendChild(verbElement);

                const verbElement2 = document.createElement("div");
                verbElement2.classList.add("verb-details");
                verbElement2.textContent = `(${verb.past})`;
                verbsContainer.appendChild(verbElement2);

                const verbElement3 = document.createElement("div");
                verbElement3.classList.add("verb-meaning")
                verbElement3.textContent = `${verb.meaning}`;
                verbsContainer.appendChild(verbElement3);

            });
        })
        .catch((error) => console.log("Error al cargar archivo JSON:", error));
});
