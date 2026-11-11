// Country code + number, bina + ya space ke. Jaise India: 919876543210
export const WHATSAPP_NUMBER = "917093514685";

export const waLink = (
  msg = "Hi Ayush, I saw your portfolio and I'd like a website for my business."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;