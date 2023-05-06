import VueAmisSdk from "./components/VueAmisSdk.vue";

export { VueAmisSdk }


const components = [VueAmisSdk];
const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export default { install }
