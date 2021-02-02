const eventHub = document.querySelector("#state-fair")


export const sideshowTicketHolders = (event) => {
    console.log(event)
    const contentTarget = document.querySelector(".peopleSideshow")
    contentTarget.innerHTML += `
    <div class="person gawker">
    </div>
    `
}


eventHub.addEventListener("sideshowTicketClicked", sideshowTicketHolders)


export const sideshowPackage = () => {
    const contentTarget = document.querySelector(".peopleSideshow")
    contentTarget.innerHTML += `
    <div class="person bigSpender">
    </div>
    `}