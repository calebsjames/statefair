const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    const clickedEvent = clickEvent.target.id
    if (clickEvent.target.id === "rideTicket" || "foodTicket" || "gameTicket" || "sideshowTicket" || "fullPackageTicket") {
        const customEvent = new CustomEvent(`${clickedEvent}Clicked`)
        eventHub.dispatchEvent(customEvent)
    }
})

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
