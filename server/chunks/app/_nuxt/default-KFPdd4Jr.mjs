import { ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(_attrs)}><div class=""><div class="header"><div class="logo"><svg width="120" height="120" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1663_931)"><path d="M6.08153 40C3.60769 35.6364 2.78307 34.078 2.16461 32.3118C0.824614 28.7793 0 24.3118 0 20.2598C0 16.7274 0.515382 12.9871 1.54615 9.76634C2.57691 6.64946 3.60769 4.46764 6.1846 0.104004H13.8123C10.6169 5.09103 9.48304 7.48063 8.45229 11.2209C7.73073 14.13 7.31843 17.143 7.31843 20.052C7.31843 24.104 8.14306 28.5715 9.48304 32.0001C10.4107 34.2858 11.3384 36.052 13.8123 40H6.08153Z" fill="#cbddd7"></path><path d="M28.7567 0.10376C26.7982 1.7661 23.0875 6.23363 23.0875 12.1557C23.0875 15.5843 28.7567 23.0648 28.7567 27.7401C28.7567 30.1297 28.0352 32.831 26.7982 34.9089C25.7675 36.6753 24.7367 37.7143 22.0567 39.8961H15.769C18.9644 37.4026 23.4998 31.6882 19.9952 23.4804C18.1398 19.1167 15.769 17.2466 15.769 12.1557C15.769 6.23363 19.4798 2.59727 22.2629 0.207656H28.7567V0.10376Z" fill="#cbddd7"></path><path d="M30.5095 40C33.9111 34.5974 35.0449 32.3117 35.9726 28.6753C36.6941 25.8701 37.1063 22.7532 37.1063 19.6364C37.1063 15.6883 36.2819 11.1169 34.7357 7.5844C33.808 5.29869 32.8803 3.63636 30.5095 0H38.2402C41.0234 4.7792 42.1573 7.16884 43.1881 10.7013C44.0125 13.8182 44.4247 16.7273 44.4247 19.948C44.4247 24.2078 43.6003 28.6753 42.2601 32.2078C41.5388 34.0779 40.714 35.5324 38.3434 39.896H30.5095V40Z" fill="#cbddd7"></path> \\ </g><defs><clipPath id="clip0_1663_931"><rect width="130.196" height="40" fill="white"></rect></clipPath></defs></svg></div></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="wrapper"></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  head() {
    return {
      title: "Title",
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/images/girls/nastya_kuznetsova.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/girls/anya_andreeva.png"
        },
        {
          rel: "preload",
          as: "image",
          href: "/images/girls/sonya_mitzkevich.png"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<!--[--><div class="bubbles"><!--[-->`);
  ssrRenderList(10, (v, i) => {
    _push(`<div class="bubble"></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="wrapper">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-KFPdd4Jr.mjs.map
