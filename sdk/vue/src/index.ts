import picovoiceMixin, { PicovoiceVue, PicovoiceWorkerFactoryArgs } from './picovoice';

// Create module definition for Vue.use()
const plugin = {
  install: function(Vue: any) {
    Vue.mixin(picovoiceMixin);
  }
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  // @ts-ignore
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // @ts-ignore
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default picovoiceMixin;

// export types
export {
  PicovoiceWorkerFactoryArgs,
  PicovoiceVue
};
