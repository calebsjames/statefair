import { foodPackage } from "../food/FoodTicketHolder.js"
import { gamePackage } from "../games/GameTicketHolder.js"
import { ridePackage } from "../rides/RideTicketHolder.js"
import { sideshowPackage } from "../sideshows/SideshowTicketHolder.js"

const eventHub = document.querySelector("#state-fair")
    
eventHub.addEventListener("fullPackageTicketClicked", customEvent => {
    
    foodPackage()
    gamePackage()
    ridePackage()
    sideshowPackage()
})