import {
  AtSignIcon,
  LinkedinIcon,
  PhoneIcon,
  SendIcon,
  UserIcon,
} from "lucide-react";

export const userInfo = {
  name: {
    label: "mazen abdallah abdalhady",
    icon: UserIcon,
    href: "#",
    target: "_self",
  },
  email: {
    label: "mazen.abdallah.abdalhady@gmail.com",
    icon: AtSignIcon,
    href: "mailto:mazen.abdallah.abdalhady@gmail.com",
    target: "_blank",
  },
  phone: {
    label: "+20 155 051 2528",
    icon: PhoneIcon,
    href: "tel:+201550512528",
    target: "_blank",
  },
  chat: {
    label: "wa.me/+201550512528",
    icon: SendIcon,
    href: "https://wa.me/+201550512528/",
    target: "_blank",
  },
  linkedin: {
    label: "linkedin.com/in/mazen-abdallah-abdalhady/",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mazen-abdallah-abdalhady/",
    target: "_blank",
  },
} as const;
