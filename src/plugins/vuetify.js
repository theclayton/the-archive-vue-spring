import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        dark: "#353335",
        darker: "#2C2A2B",
        darkRed: "#814C4F",
        lightOrange: "#D36E2D",
        lighterOrange: "#DDA032",
        lightGreen: "#78AF9F",
        lightBlue: "#659CC8",
        light: "#EED9B7",
        lighter: "#EFEAE1",
      },
    },
  },
});
