const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    const clickedEvent = clickEvent.target.id
    console.log(`${clickedEvent}Clicked`)
    if (clickEvent.target.id === "rideTicket" || "foodTicket" || "gameTicket" || "sideshowTicket" || "fullPackageTicket") {
        debugger
        const customEvent = new CustomEvent(`${clickedEvent}Clicked`)
        eventHub.dispatchEvent(customEvent)
    }
})

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "foodTicket") {
//         const customEvent = new CustomEvent("foodTicketClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "gameTicket") {
//         const customEvent = new CustomEvent("gameTicketClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "sideshowTicket") {
//         const customEvent = new CustomEvent("sideshowTicketClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "fullPackageTicket") {
//         const customEvent = new CustomEvent("fullPackageTicketClicked")
//         eventHub.dispatchEvent(customEvent)
//     }
// })

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
            </div>
    `
}
