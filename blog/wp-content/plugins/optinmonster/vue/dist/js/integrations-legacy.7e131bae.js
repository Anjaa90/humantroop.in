"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[801],{53683:function(t,i,e){e.r(i),e.d(i,{default:function(){return p}});var s=function(){var t=this,i=t._self._c;return i("core-page",[i("common-alerts",{attrs:{alerts:t.alerts}}),t.isLoading?i("core-loading",{staticClass:"integrations-loading"}):t._e(),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?t._e():i("div",{staticClass:"omapi-integrations"},[t.showIntegrations?i("div",{staticClass:"omapi-integrations__section"},[i("h2",[t._v("My Integrations")]),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-my-integrations"}},t._l(t.integrations,(function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})})),1)]):t._e(),t.showFeatured?i("div",{staticClass:"omapi-integrations__section"},[i("h2",[t._v("Featured Integrations")]),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-featured-integrations"}},t._l(t.featuredProviders,(function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})})),1)]):t._e(),i("div",{staticClass:"omapi-integrations__section all-integrations"},[i("h2",[t._v("All Integrations")]),i("integrations-filters"),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-all-integrations"}},t._l(t.providers,(function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})})),1),t.showSearchAlert?i("div",{staticClass:"search-alert"},[i("integrations-partials-custom-integrations")],1):t._e()],1)])]),i("integrations-modal-analytics"),i("integrations-modal-custom"),i("templates-modal-not-connected")],1)},n=[],r=e(86080),a=e(39764),o=e(20629),g=(0,o._p)("integrations"),c=g.mapState,l={mixins:[a.W],computed:(0,r.Z)((0,r.Z)({},c(["integrations","providers","featuredProviders","filters","search","searchResults"])),{},{showSearchAlert:function(){return(this.isFiltering||this.isSearching)&&0===this.searchResults.length},isLoading:function(){return this.$store.getters.isLoading("integrations")},alerts:function(){return this.$get("$store.state.alerts",[])},showIntegrations:function(){return 0<this.integrations.length},showFeatured:function(){return 0<this.featuredProviders.length}}),created:function(){this.$store.dispatch("integrations/fetchIntegrationData")["catch"]((function(){})),this.$store.getters.isFetched("siteSettings")||this.$store.dispatch("settings/fetchSiteSettings")["catch"]((function(){}))},beforeDestroy:function(){this.resetProviders()}},u=l,d=e(1001),h=(0,d.Z)(u,s,n,!1,null,null,null),p=h.exports}}]);
//# sourceMappingURL=integrations-legacy.7e131bae.js.map