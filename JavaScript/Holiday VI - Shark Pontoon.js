function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        if (pontoonDistance / youSpeed < 2 * sharkDistance / sharkSpeed) {
            return "Alive!"
        } else return "Shark Bait!"
    } else {
        if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
            return "Alive!"
        } else return "Shark Bait!"
    }
}