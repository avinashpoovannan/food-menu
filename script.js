function orderWhatsApp(item, price) {
    let phoneNumber = "+919344470253";
    let message = `Hello, I would like to order ${item} for ₹${price}.`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
