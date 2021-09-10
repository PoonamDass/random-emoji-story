const emojis = [
    '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
    '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
    '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
    '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
    '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊'
]



const number= document.querySelector("#story-length-input")
let emojiStory= document.querySelector("#emoji-story")
const generateStoryBtn = document.querySelector("#generate-story-btn")
let emojiString= ""

generateStoryBtn.addEventListener("click", () =>{
    if (number.value === ""){
        window.alert("Error: Missing input")
    }
    randomEmoji()
    
})

const randomEmoji = () =>{
    emojiString=""
    for(let i=0; i<number.value;i++){
        let randomEmojis = emojis[Math.floor(Math.random() * emojis.length)] 
        emojiString += randomEmojis
    }
    emojiStory.textContent = `Emoji Story: ${emojiString}`
}

const description = document.querySelector("#description-input")
const descriptionBtn = document.querySelector("#submit-description-btn")
const historyTitle = document.querySelector("#history-title")
const ul = document.querySelector("#list")
let num = 1

descriptionBtn.addEventListener("click", ()=>{
    
    if(description.value === ""){
        window.alert("Error: Missing input")
    } else {
        appendList()
        
    }
})
    
 const appendList = () =>{   
    const li = document.createElement("li")
    li.textContent= emojiString + description.value
    description.value = ""
    ul.appendChild(li)

    if(num===1){
        historyTitle.textContent = "1 Saved Story"
    } else {
        historyTitle.textContent = `${num} Saved Stories`
    }
    num ++
    emojiStory.textContent = `Emoji Story`
    
}
