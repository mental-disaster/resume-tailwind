export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  email: {
    label: string;
    value: string;
  };
  phone: {
    label: string;
    value: string;
  };
  social: SocialLink[];
}

export const contactData: ContactInfo = {
  email: {
    label: "이메일",
    value: "dummy618234@email.com"
  },
  phone: {
    label: "전화번호",
    value: "010-9767-2366"
  },
  social: [
    {
      label: "GitHub",
      url: "https://github.com"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      label: "Twitter",
      url: "https://twitter.com"
    }
  ]
};