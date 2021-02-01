const eventHub = document.querySelector("#state-fair")

export const rideTicketHolders = () => {
    const contentTarget = document.querySelector(".peopleRides")
    contentTarget.innerHTML += `
    <div class="person rider">
    </div>
    `
}

eventHub.addEventListener("rideTicketClicked", customEvent => {
    rideTicketHolders()
})


