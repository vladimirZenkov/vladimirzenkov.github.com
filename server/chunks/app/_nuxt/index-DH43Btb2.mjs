import { _ as __nuxt_component_0 } from './CTeam-VMvV6dEK.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  data() {
    return {
      currentId: 0,
      response: [],
      girls: [],
      teams: []
    };
  },
  mounted() {
    this.getData();
    this.getTeams();
    (void 0).addEventListener("click", () => {
      this.incrementCurrentId();
    });
  },
  methods: {
    async getData() {
      let girls = await $fetch("https://api-generator.retool.com/gCsWMZ/girls", {
        method: "GET"
      });
      this.girls = girls.sort((a, b) => a.team_id - b.team_id);
      console.log("resp: ", girls);
    },
    async getTeams() {
      let teams = await $fetch("https://api-generator.retool.com/QAwsSX/teams/", {
        method: "GET"
      });
      this.teams = teams;
    },
    async incrementCurrentId() {
      const currentId = this.currentId;
      this.currentId = null;
      await new Promise((resolve) => setTimeout(resolve, 1100));
      this.currentId = currentId + 1;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CTeam = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><!--[--><div style="${ssrRenderStyle($data.currentId === 0 ? null : { display: "none" })}" class="slide"><h1 class="title">\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0441 \u043D\u0430\u043C\u0438 \u0438\u0433\u0440\u0430\u044E\u0442:</h1></div>`);
  ssrRenderList($data.teams, (team, index2) => {
    _push(ssrRenderComponent(_component_CTeam, {
      style: $data.currentId === index2 + 1 ? null : { display: "none" },
      name: team.name,
      girls: $data.girls.filter((val) => val.team_id === team.id)
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DH43Btb2.mjs.map
