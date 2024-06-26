import { defineConfig } from 'vitepress';

/*Do not add extra space (Example: VenusLinks, MarbleLinks, HuskyLinks*/
/*CODENAME*/Links = [
  {
    text: 'Installation',
    items: [
      { text: 'Getting Started', link: '/custom-rom-guide/     <!-- DEVICE CODENAME -->    /getting-started' },         /*Edit This Line*/
      {
        text: 'Preparing Settings',
        items: [
          { text: 'Developer Options', link: '/custom-rom-guide/common/developer-options' },
          { text: 'USB Debugging', link: '/custom-rom-guide/common/usb-debugging' },
          { text: 'Fastboot/Recovery Mode', link: '/custom-rom-guide/common/fastboot-recovery-mode' },
        ]
      },
      { text: 'Unlock Bootloader', link: '/custom-rom-guide/     <!-- DEVICE CODENAME -->     /unlock-bootloader' },       /*Edit This Line*/
      { text: 'Install Custom Recovery', link: '/custom-rom-guide/      <!-- DEVICE CODENAME -->    /install-custom-recovery' },    /*Edit This Line*/
      { text: 'Flash Custom ROM', link: '/custom-rom-guide/      <!-- DEVICE CODENAME -->       /flash-custom-rom' }    /*Edit This Line*/
    ]
  },
  {
    items: [
      { text: 'Prerequisites for Commands', link: '/custom-rom-guide/common/prerequisites-for-commands' },
      { text: 'Boot into Fastboot Mode', link: '/custom-rom-guide/common/boot-into-fastboot-mode' },
      { text: 'Boot into Recovery Mode', link: '/custom-rom-guide/common/boot-into-recovery-mode' }
    ]
  },
  {
    text: 'Post ROM Installation',
    items: [
      { text: 'About Root', link: '/custom-rom-guide/common/about-root' },
      { text: 'Rooting Device', link: '/custom-rom-guide/    <!-- DEVICE CODENAME -->     /rooting-device' },    /*Edit This Line*/
      { text: 'About Integrity/Safetynet', link: '/custom-rom-guide/common/about-integrity-safetynet' }
    ]
  },
  {
    text: 'Help',
    items: [
      { text: 'About Brick', link: '/custom-rom-guide/common/about-brick' },
      { text: 'Softbrick Help', link: '/custom-rom-guide/    <!-- DEVICE CODENAME -->   /softbrick-help' }    /*Edit This Line*/

      /*{ text: 'Hardbrick Help', link: '/custom-rom-guide/     <!-- DEVICE CODENAME -->     /softbrick-help' }*/
      /*Uncomment and adjust the above line if you're adding hardbrick-help page*/

    ]
  }
];

export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: './theme/custom.css' }],
    ['link', { rel: 'icon', href: 'https://svgshare.com/i/17FG.svg' }],
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Disclaimer', link: '/custom-rom-guide/common/disclaimer' },
      { text: 'Team', link: 'https://hyperglass.github.io/morphous/team.html' },
    ],

    logo: {
      light: 'https://i.ibb.co/6v8DS91/morphous-logo-prototype-light.png',
      dark: 'https://i.ibb.co/rkHDpYN/morphous-logo-prototype-dark.png',
      alt: 'Morphous'
    },

    siteTitle: 'Morphous',
    description: 'A Practical Approach for Modding Android',
    sidebar: /*CODENAME*/Links,                                /*Do not add extra space (Example: VenusLinks, MarbleLinks, HuskyLinks*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyperglass' },
      { icon: 'discord', link: 'https://discord.gg/TnPumBTqvv' }
    ],

    editLink: {
      pattern: 'https://github.com/hyperglass/morphous-    <!-- DEVICE CODENAME -->    /edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
    },

  },

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "/.vitepress/theme/custom.css";`
        },
      },
    },
  },
  title: 'Morphous',
  ignoreDeadLinks: true,
  base: '/morphous-    <!-- DEVICE CODENAME -->   /',   /*Edit This Line*/
});
