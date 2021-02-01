const eventHub = document.querySelector("#state-fair")

export const foodTicketHolders = () => {
    const contentTarget = document.querySelector(".peopleFood")
    contentTarget.innerHTML += `
    <div class="person eater">
    </div>
    `    
}

eventHub.addEventListener("foodTicketClicked", customEvent => {
    foodTicketHolders()
})