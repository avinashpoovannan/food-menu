function orderOnWhatsApp(mealName) {
    let phoneNumber = "919344470253"; // WhatsApp number
    let message = `Hello! I'd like to order: ${mealName}`;
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
