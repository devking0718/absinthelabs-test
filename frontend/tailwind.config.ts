import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: {
            dark: '#006258',
            light: '#006258'
          },
          hover: {
            dark: '#8ab7b2',
            light: '#3e8f77'
          },
          disabled: {
            dark: '#00625833',
            light: '#3e8f7733'
          }
        },
        secondary: {
          dark: '#ffffff',
          light: '#000000'
        },
        text: {
          primary: {
            dark: '#f7f7f8',
            light: '#0c0f0e'
          },
          secondary: {
            dark: '#abafb4',
            light: '#3b3b3b'
          },
          disabled: {
            dark: '#abafb4',
            light: '#abafb4'
          },
          button: {
            dark: '#ffffff',
            light: '#ffffff'
          }
        },
        elevation: {
          background: {
            dark: '#080a0b',
            light: '#f9f9f9'
          },
          elevation1: {
            dark: '#0c0e10',
            light: '#f1f1f1'
          },
          elevation2: {
            dark: '#111315',
            light: '#e8e8e8'
          },
          elevation3: {
            dark: '#16181a',
            light: '#dfdfdf'
          }
        },
        status: {
          success: {
            main: {
              dark: '#27d17f',
              light: '#28a745'
            },
            elevation1: {
              dark: '#27d17f1a',
              light: '#28a74540'
            },
            elevation2: {
              dark: '#27d17f180',
              light: '#3E8F7780'
            },
          },
          error: {
            dark: '#f44336',
            light: '#f44336'
          },
          warning: {
            dark: '#ffc107',
            light: '#ffc107'
          },
        }
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, #101c1c, #222311)'
      },
      boxShadow: {
        'inset-custom': 'inset 0 0 1px 1px rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
