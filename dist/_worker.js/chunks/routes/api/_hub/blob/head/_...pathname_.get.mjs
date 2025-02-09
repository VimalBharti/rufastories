import{e as a,r as o,b as t,z as s,h as n}from"../../../../../nitro/nitro.mjs";import{r}from"../../../../../_/auth.mjs";import"node:async_hooks";const e=a((async a=>{await r(a),o("blob");const{pathname:e}=await t(a,s.object({pathname:s.string().min(1)}).parse);return n().head(decodeURIComponent(e))}));export{e as default};
//# sourceMappingURL=_...pathname_.get.mjs.map
