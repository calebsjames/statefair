const eventHub = document.querySelector("#state-fair")

export const sideshowTicketHolders = () => {
    const contentTarget = document.querySelector(".peopleSideshow")
    contentTarget.innerHTML += `
    <div class="person gawker">
    </div>
    `
}
    
eventHub.addEventListener("sideshowTicketClicked", customEvent => {
    sideshowTicketHolders()
})


export const sideshowPackage = () => {
    const contentTarget = document.querySelector(".peopleSideshow")
    contentTarget.innerHTML += `
    <div class="person bigSpender">
    </div>
    `
}