/** Site-wide contact  update here to change everywhere */
export const CONTACT = {
  phoneDisplay: "+27 65 532 5054",
  phoneTel: "+27655325054",
  email: "info@loktioncode.org",
  address: "10 Bond Street, Midrand, 1685",
};

export const mailtoHref = (subject = "Project inquiry") =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
