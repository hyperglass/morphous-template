// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CustomButton from '/.vitepress/components/CustomButton.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register your custom global component
    app.component('CustomButton', CustomButton);
  }
}