import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
      girls: [],
      teams: [],
      teamName: ""
    };
  },
  mounted() {
    this.getData();
    this.getTeams();
  },
  methods: {
    handleDragStart(e, girl) {
      e.dataTransfer.setData("girl", JSON.stringify(girl));
      console.log("dragStart");
    },
    async removeFromTeam(girlId) {
      await $fetch(`https://api-generator.retool.com/gCsWMZ/girls/${girlId}/`, {
        method: "PATCH",
        body: {
          team_id: 0
        }
      });
      await this.getData();
    },
    async handleDrop(e, teamId) {
      let girlData = JSON.parse(e.dataTransfer.getData("girl"));
      girlData.team_id = parseInt(teamId);
      girlData.id = parseInt(girlData.id);
      await $fetch(`https://api-generator.retool.com/gCsWMZ/girls/${girlData.id}/`, {
        method: "PUT",
        body: girlData
      });
      await this.getData();
    },
    async getTeams() {
      let teams = await $fetch("https://api-generator.retool.com/QAwsSX/teams/", {
        method: "GET"
      });
      this.teams = teams;
    },
    async addTeam() {
      await $fetch("https://api-generator.retool.com/QAwsSX/teams", {
        method: "POST",
        body: {
          name: this.teamName,
          round_1: 0,
          round_2: 0,
          round_3: 0,
          round_4: 0,
          round_5: 0
        }
      });
      await this.getTeams();
      this.teamName = "";
    },
    async deleteTeam(id) {
      const memberIds = this.girls.filter((val) => val.team_id === id).map((val) => val.id);
      for (let memberId of memberIds) {
        await this.removeFromTeam(memberId);
      }
      await $fetch(`https://api-generator.retool.com/QAwsSX/teams/${id}`, {
        method: "DELETE"
      });
      await this.getTeams();
    },
    async updateTeam($event, teamId) {
      let teamData = Object.fromEntries([...new FormData($event.target)]);
      await $fetch(`https://api-generator.retool.com/QAwsSX/teams/${teamId}`, {
        method: "PATCH",
        body: teamData
      });
      await this.getTeams();
    },
    async getData() {
      let girls = await $fetch("https://api-generator.retool.com/gCsWMZ/girls", {
        method: "GET"
      });
      this.girls = girls.sort((a, b) => a.team_id - b.team_id);
      console.log("resp: ", girls);
    },
    async deleteGirl(id) {
      await $fetch(`https://api-generator.retool.com/gCsWMZ/girls/${id}`, {
        method: "DELETE"
      });
      await this.getData();
    },
    async incrementCurrentId() {
      const currentId = this.currentId;
      this.currentId = null;
      await new Promise((resolve) => setTimeout(resolve, 1300));
      this.currentId = currentId + 1;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="title"> \u041F\u0430\u043D\u0435\u043B\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 </h1><div class="service-tables"><div class="service-table service-table_members"><table><thead><tr><th>\u0418\u043C\u044F</th><th>\u041A\u043E\u043C\u0430\u043D\u0434\u0430</th><th>\u0421\u043B\u0430\u0433</th><th></th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.girls.filter((val) => !val.team_id), (girl) => {
    var _a;
    _push(`<tr draggable="true"><td><div>${ssrInterpolate(girl.name)}</div></td><td>${ssrInterpolate((_a = $data.teams.find((val) => val.id === girl.team_id)) == null ? void 0 : _a.name)}</td><td>${ssrInterpolate(girl.slug)}</td><td><button class="delete-btn">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="service-table"><table><thead><tr><th>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</th><th>\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438</th><th>1 \u0440\u0430\u0443\u043D\u0434</th><th>2 \u0440\u0430\u0443\u043D\u0434</th><th>3 \u0440\u0430\u0443\u043D\u0434</th><th>4 \u0440\u0430\u0443\u043D\u0434</th><th>\u0424\u0438\u043D\u0430\u043B</th><th></th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.teams, (team) => {
    _push(`<tr><td><form><input type="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" name="name"${ssrRenderAttr("value", team.name)}></form></td><td><!--[-->`);
    ssrRenderList($data.girls.filter((val) => val.team_id === team.id), (girl) => {
      _push(`<div class="team__member"><span>${ssrInterpolate(girl.name)}</span><button class="delete-btn">x</button></div>`);
    });
    _push(`<!--]--></td><td><form><input class="input__number" type="number" placeholder="0" name="round_1"${ssrRenderAttr("value", team.round_1)}></form></td><td><form><input class="input__number" type="number" placeholder="0" name="round_2"${ssrRenderAttr("value", team.round_2)}></form></td><td><form><input class="input__number" type="number" placeholder="0" name="round_3"${ssrRenderAttr("value", team.round_3)}></form></td><td><form><input class="input__number" type="number" placeholder="0" name="round_4"${ssrRenderAttr("value", team.round_4)}></form></td><td><form><input class="input__number" type="number" placeholder="0" name="round_5"${ssrRenderAttr("value", team.round_5)}></form></td><td><button class="delete-btn">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></td></tr>`);
  });
  _push(`<!--]--><tr><td><form><input type="text" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"${ssrRenderAttr("value", $data.teamName)}></form></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/members.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const members = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { members as default };
//# sourceMappingURL=members-DDkHYbOE.mjs.map
