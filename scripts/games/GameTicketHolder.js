const eventHub = document.querySelector("#state-fair")

export const gameTicketHolders = () => {
    const contentTarget = document.querySelector(".peopleGames")
    contentTarget.innerHTML += `
    <div class="person player">
    </div>
    `
}
    
eventHub.addEventListener("gameTicketClicked", customEvent => {
    gameTicketHolders()
})