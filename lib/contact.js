/**
 * Contact details are never stored as plain strings so they do not appear in the
 * server-rendered HTML or as a greppable token in the JS bundle. Every consumer
 * decodes them on the client, after hydration, and only when a person interacts.
 */
const decode = (parts) => parts.map((p) => p.split("").reverse().join("")).join("");

// "kontakt" + "@" + "marvhuelsmann.com" – each segment reversed.
const MAIL_PARTS = ["tkatnok", "@", "moc.nnamsleuhvram"];
// "mail" + "@" + "marvhuelsmann.com"
const MAIL_INFO_PARTS = ["liam", "@", "moc.nnamsleuhvram"];
// "+49 171 1109101"
const PHONE_PARTS = [" 94+", " 171", "1019011"];

export const getContactMail = () => decode(MAIL_PARTS);
export const getInfoMail = () => decode(MAIL_INFO_PARTS);
export const getPhone = () => decode(PHONE_PARTS);
export const getPhoneHref = () => `tel:${getPhone().replace(/\s+/g, "")}`;
