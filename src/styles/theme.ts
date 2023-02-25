import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      body: "Outfit, sans-serif",
      heading: "Bree Serif, serif",
      mono: "Menlo, monospace",
    },
    colors: {
        transparent: 'transparent',
        black: {
            50: '#333333',
            100: '#292929',
            200: '#242424',
            300: '#222222',
            400: '#1F1F1F',
            500: '#1F1F1F',
            600: '#1C1C1C',
            700: '#191919',
            800: '#171717',
            900: '#151515',
        },
        opacity: '#EBEBEB',
        text: '#999999',
        white: '#F7F7F7',
        purple: {
            50: '#A28FBC',
            100: '#9984B5',
            200: '#8F78AE',
            300: '#846BA6',
            400: '#785C9D',
            500: '#6A4C93',
            600: '#604586',
            700: '#573F7A',
            800: '#4F396F',
            900: '#483465',
        },
        magenta: '#FC1AFC',
        blue: {
            400: '#41A5E3',
            500: '#1982C4',
            600: '#1070AC',
        },
        red: {
            400: '#FF8083',
            500: '#FF595E',
            600: '#E5393F'
        },
        green: {
            400: '#BBF55D',
            500: '#8AC926',
            600: '#7DB526'
        },
        yellow: '#FFCA3A',
      },
  });