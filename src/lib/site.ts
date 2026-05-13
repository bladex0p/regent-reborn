export const SITE = {
  name: "The Prince Regent",
  address: "126 Guildford Street, Chertsey, Surrey KT16 9AH",
  phone: "07506 736185",
  phoneTel: "tel:+447506736185",
  email: "info@theprinceregent.pub",
  whatsapp: "https://wa.me/447506736185",
  maps: "https://maps.google.com/?q=126+Guildford+Street,+Chertsey+KT16+9AH",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/takeaway", label: "Takeaway" },
  { to: "/sports-events", label: "Sports & Events" },
  { to: "/group-booking", label: "Group Booking" },
  { to: "/contact", label: "Contact" },
] as const;

export const HOURS = [
  ["Monday", "12:00 PM – 11:00 PM"],
  ["Tuesday", "12:00 PM – 11:00 PM"],
  ["Wednesday", "12:00 PM – 11:00 PM"],
  ["Thursday", "12:00 PM – 11:00 PM"],
  ["Friday", "12:00 PM – 11:00 PM"],
  ["Saturday", "12:00 PM – 11:00 PM"],
  ["Sunday", "12:00 PM – 10:30 PM"],
] as const;
