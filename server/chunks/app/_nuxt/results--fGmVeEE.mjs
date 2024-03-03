import { _ as __nuxt_component_0 } from './CTeam-VMvV6dEK.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
      currentSlide: 0,
      response: [],
      girls: [],
      teams: [],
      loaded: false
    };
  },
  async mounted() {
    await Promise.all([
      this.getData(),
      this.getTeams()
    ]);
    this.loaded = true;
    (void 0).addEventListener("click", () => {
      this.incrementcurrentSlide();
    });
  },
  methods: {
    getTotalScore(team) {
      let results2 = [
        team.round_1,
        team.round_2,
        team.round_3,
        team.round_4,
        team.round_5
      ];
      return results2.map((val) => parseInt(val)).reduce((a, b) => a + b, 0);
    },
    async getData() {
      let girls = await $fetch(
        "https://api-generator.retool.com/gCsWMZ/girls",
        {
          method: "GET"
        }
      );
      this.girls = girls.sort((a, b) => a.team_id - b.team_id);
      console.log("resp: ", girls);
    },
    async getTeams() {
      let teams = await $fetch(
        "https://api-generator.retool.com/QAwsSX/teams/",
        {
          method: "GET"
        }
      );
      this.teams = teams.sort(
        (a, b) => b.round_5 - a.round_5
      ).sort(
        (a, b) => this.getTotalScore(b) - this.getTotalScore(a)
      );
    },
    async incrementcurrentSlide() {
      const currentSlide = this.currentSlide;
      this.currentSlide = null;
      await new Promise((resolve) => setTimeout(resolve, 1100));
      this.currentSlide = currentSlide + 1;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CTeam = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.loaded) {
    _push(`<!--[--><div style="${ssrRenderStyle($data.currentSlide === 0 ? null : { display: "none" })}"><h1 class="title">3 \u043C\u0435\u0441\u0442\u043E</h1></div><div style="${ssrRenderStyle($data.currentSlide === 1 ? null : { display: "none" })}"><h1 class="title">3 \u043C\u0435\u0441\u0442\u043E</h1>`);
    _push(ssrRenderComponent(_component_CTeam, {
      bronze: "",
      name: $data.teams[2].name,
      girls: $data.girls.filter((val) => val.team_id === $data.teams[2].id)
    }, null, _parent));
    _push(`</div><div style="${ssrRenderStyle($data.currentSlide === 2 ? null : { display: "none" })}"><h1 class="title">2 \u043C\u0435\u0441\u0442\u043E</h1></div><div style="${ssrRenderStyle($data.currentSlide === 3 ? null : { display: "none" })}"><h1 class="title">2 \u043C\u0435\u0441\u0442\u043E</h1>`);
    _push(ssrRenderComponent(_component_CTeam, {
      silver: "",
      name: $data.teams[1].name,
      girls: $data.girls.filter((val) => val.team_id === $data.teams[1].id)
    }, null, _parent));
    _push(`</div><div style="${ssrRenderStyle($data.currentSlide === 4 ? null : { display: "none" })}"><h1 class="title">1 \u043C\u0435\u0441\u0442\u043E</h1></div><div style="${ssrRenderStyle($data.currentSlide === 5 ? null : { display: "none" })}"><h1 class="title">1 \u043C\u0435\u0441\u0442\u043E</h1>`);
    _push(ssrRenderComponent(_component_CTeam, {
      gold: "",
      name: $data.teams[0].name,
      girls: $data.girls.filter((val) => val.team_id === $data.teams[0].id)
    }, null, _parent));
    _push(`</div><div style="${ssrRenderStyle($data.currentSlide === 6 ? null : { display: "none" })}" class="slide"><h1 class="title">\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430</h1><table><thead><tr><th>\u041C\u0435\u0441\u0442\u043E</th><th>\u041A\u043E\u043C\u0430\u043D\u0434\u0430</th><th>\u0420\u0430\u0443\u043D\u0434 1</th><th>\u0420\u0430\u0443\u043D\u0434 2</th><th>\u0420\u0430\u0443\u043D\u0434 3</th><th>\u0420\u0430\u0443\u043D\u0434 4</th><th>\u0424\u0438\u043D\u0430\u043B</th><th><b>\u0418\u0442\u043E\u0433\u043E</b></th></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.teams, (team, index) => {
      _push(`<tr class="${ssrRenderClass({
        bronze: index === 2,
        silver: index === 1,
        gold: index === 0
      })}"><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate(team.name)}</td><td>${ssrInterpolate(team.round_1)}</td><td>${ssrInterpolate(team.round_2)}</td><td>${ssrInterpolate(team.round_3)}</td><td>${ssrInterpolate(team.round_4)}</td><td>${ssrInterpolate(team.round_5)}</td><td><b>${ssrInterpolate($options.getTotalScore(team))}</b></td></tr>`);
    });
    _push(`<!--]--></tbody></table></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const results = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { results as default };
//# sourceMappingURL=results--fGmVeEE.mjs.map
