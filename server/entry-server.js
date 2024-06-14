import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, renderToWebStream } from "vue/server-renderer";
import { defineComponent, ref, useSSRContext, createSSRApp } from "vue";
const _imports_0 = "/vite.svg";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: {}
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-8fe7e3eb>${ssrInterpolate(_ctx.msg)}</h1><div class="card" data-v-8fe7e3eb><button type="button" data-v-8fe7e3eb>count is ${ssrInterpolate(count.value)}</button><p data-v-8fe7e3eb> Edit <code data-v-8fe7e3eb>components/HelloWorld.vue</code> to test HMR </p></div><p data-v-8fe7e3eb> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-8fe7e3eb>create-vue</a>, the official Vue + Vite starter </p><p data-v-8fe7e3eb> Install <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-8fe7e3eb>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-8fe7e3eb>Click on the Vite and Vue logos to learn more</p><!--]-->`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8fe7e3eb"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-086e6a54><a href="https://vitejs.dev" target="_blank" data-v-086e6a54><img${ssrRenderAttr("src", _imports_0)} class="logo" alt="Vite logo" data-v-086e6a54></a><a href="https://vuejs.org/" target="_blank" data-v-086e6a54><img${ssrRenderAttr("src", _imports_1)} class="logo vue" alt="Vue logo" data-v-086e6a54></a></div>`);
      _push(ssrRenderComponent(HelloWorld, { msg: "Vite + Vue" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-086e6a54"]]);
function createApp() {
  const app = createSSRApp(App);
  return { app };
}
function render() {
  const { app } = createApp();
  const ctx = {};
  const stream = renderToWebStream(app, ctx);
  return { stream };
}
export {
  render
};
