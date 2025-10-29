import { addons } from "@storybook/manager-api";

// Add Material Icons to Storybook
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.appendChild(link);
