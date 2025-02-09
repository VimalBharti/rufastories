import{e as a,r as o,b as t,z as s,h as r}from"../../../../nitro/nitro.mjs";import{r as e}from"../../../../_/auth.mjs";import"node:async_hooks";const n=a((async a=>{await e(a),o("blob");const{pathname:n}=await t(a,s.object({pathname:s.string().min(1)}).parse);return r().serve(a,decodeURIComponent(n))}));export{n as default};
//# sourceMappingURL=_...pathname_.get.mjs.map
