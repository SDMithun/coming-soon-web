const currentYear = new Date().getFullYear();
const data = {
    sitename: "StartUp SRI",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://startupsri.com",
    sitelogo: "",
    title: "Coming Soon!",
    description: "We&apos;re currently working hard to bring you something great, and we can&apos;t wait to share it with you. Our team is putting the finishing touches on a new project that we think you&apos;ll love 😍.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://startupsri.com">StartUp SRI</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: true, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "#",
        },
        {
            icon: "twitter",
            link: "#",
        },
        {
            icon: "linkedIn",
            link: "#",
        },
    ],
    hide :{
        subscribeForm: true, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
