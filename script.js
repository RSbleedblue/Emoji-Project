const searchInput = document.getElementById("search");
const emojiContainer = document.querySelector(".emojisDiv");

// Function to handle finding emojis
function findEmoji() {
    let inputValue = searchInput.value.toLowerCase();
    emojiContainer.innerHTML = "";
    const filteredEmojis = emojiList.filter(emoji => {
        return emoji.tags.some(tag => tag.includes(inputValue));
    });
    if(filteredEmojis.length === 0) {
        alert("Could not find any  matching emojis.");
        return;
    } 

    filteredEmojis.forEach(emoji => {
        // Create div for each emoji 
        const emojiDiv = document.createElement("div");
        emojiDiv.classList.add("w-[30%]", "h-[80%]", "min-w-[165px]", "bg-gray-50", "rounded-xl", "flex", "flex-col", "justify-center", "items-center", "overflow-hidden");
        emojiDiv.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        
        // Add icon (emoji)
        const icon = document.createElement("span");
        icon.classList.add("text-[40px]","mt-5");
        icon.textContent = emoji.emoji;

        // Append icon to div
        emojiDiv.appendChild(icon);

        const title = document.createElement("h1");
        title.classList.add("text-[20px]", "text-wrap", "m-2", "p-2");
        title.textContent = capitalizeFirstLetter(emoji.aliases.toString());

        emojiDiv.appendChild(title);

        const desc = document.createElement("h2");
        desc.classList.add("m-2", "p-2", "text-warp");
        desc.textContent = capitalizeFirstLetter(emoji.description);

        emojiDiv.appendChild(desc);
        // Append div to container
        emojiContainer.appendChild(emojiDiv);
    });
}

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        findEmoji();
    }
});

function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
