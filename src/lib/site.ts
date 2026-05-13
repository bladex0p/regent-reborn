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
  ["Monday", "11:00 – 23:00"],
  ["Tuesday", "11:00 – 23:00"],
  ["Wednesday", "11:00 – 23:00"],
  ["Thursday", "11:00 – 23:00"],
  ["Friday", "11:00 – 23:00"],
  ["Saturday", "11:00 – 00:00"],
  ["Sunday", "12:00 – 17:00"],
] as const;
