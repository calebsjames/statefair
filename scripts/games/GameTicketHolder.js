const eventHub = document.querySelector("#state-fair")


export const gameTicketHolders = () => {
    const contentTarget = document.querySelector(".peopleGames")
    contentTarget.innerHTML += `
    <div class="person player">
    </div>
    `
}


eventHub.addEventListener("gameTicketClicked", gameTicketHolders)


export const gamePackage = () => {
    const contentTarget = document.querySelector(".peopleGames")
    contentTarget.innerHTML += `
    <div class="person bigSpender">
    </div>
    `}