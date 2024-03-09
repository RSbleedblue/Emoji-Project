const search = document.getElementById("searchInput");
const emojiContainer = document.querySelector(".emojisDiv");
function findEmoji(){
    
    let inputValue = search.value.toLowerCase();
    emojiContainer.innerHTML = "";
    const filteredEmojis = emojiList.filter(emoji =>{
        return emoji.tags.some(tag => tag.includes(inputValue));
    });

    filteredEmojis.forEach(emoji =>{
    // div for  each emoji 
        const emojiDiv = document.createElement("div");
        emojiDiv.classList.add("w-[30%] h-[80%] min-w-[165px] bg-gray-50 rounded-xl flex flex-col gap-2 justify-center items-center");
    // adding image of the emoji
        const icon = document.createElement("span");
        icon.classList.add("text-[40px]");
        icon.textContent = emoji.aliases;
    })
    

}