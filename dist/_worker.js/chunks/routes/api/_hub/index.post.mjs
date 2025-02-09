import{e as s,r as o,i as t,h as a,t as e}from"../../../nitro/nitro.mjs";import{r}from"../../../_/auth.mjs";import"node:async_hooks";const m=s((async s=>{await r(s),o("blob");const m=t(s);return a().handleUpload(s,{formKey:m.formKey||"files",multiple:"false"!==m.multiple,put:e(m.put),ensure:e(m.ensure)})}));export{m as default};
//# sourceMappingURL=index.post.mjs.map
