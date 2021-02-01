import { foodTicketHolders } from "../food/FoodTicketHolder.js"
import { gameTicketHolders } from "../games/GameTicketHolder.js"
import { rideTicketHolders } from "../rides/RideTicketHolder.js"
import { sideshowTicketHolders } from "../sideshows/SideshowTicketHolder.js"


    
eventHub.addEventListener("fullPackageTicketClicked", customEvent => {
    
    foodTicketHolders()
    gameTicketHolders()
    rideTicketHolders()
    sideshowTicketHolders()
})