import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    name: {
      type: Object,
      required: true,
      default: () => ({})
    },
    girls: {
      type: Array,
      required: true,
      default: () => []
    },
    bronze: {
      type: Boolean,
      required: false,
      default: false
    },
    silver: {
      type: Boolean,
      required: false,
      default: false
    },
    gold: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      // gzhelSvg: require('@/images/svg/gzhel.svg')
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["team-wrapper", { gold: $props.gold, silver: $props.silver, bronze: $props.bronze }]
  }, _attrs))}><div class="team-members"><div class="team-background"></div><!--[-->`);
  ssrRenderList($props.girls, (girl) => {
    _push(`<div class="girl"><div class="girl-background"></div><img class="girl-image"${ssrRenderAttr("src", `/images/girls/${girl.slug}.png`)}><div class="girl-name">${ssrInterpolate(girl.name)}</div></div>`);
  });
  _push(`<!--]--></div><h1 class="team-name">${ssrInterpolate($props.name)}</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTeam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CTeam-VMvV6dEK.mjs.map
