import navApp from './views/navApp.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'navApp', typeof __VLS_localComponents, "NavApp", "navApp", "navApp"> &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "routerLink", "router-link"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">;
({} as __VLS_IntrinsicElements).nav; ({} as __VLS_IntrinsicElements).nav;
__VLS_components.NavApp; __VLS_components.navApp;
// @ts-ignore
[navApp,];
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components["router-link"]; __VLS_components["router-link"];
// @ts-ignore
[RouterLink, RouterLink,];
__VLS_components.RouterView; __VLS_components.routerView; __VLS_components["router-view"];
// @ts-ignore
[RouterView,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["nav"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).nav;
({} as __VLS_IntrinsicElements).nav;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'NavApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.NavApp : 'navApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.navApp : (typeof __VLS_resolvedLocalAndGlobalComponents)['navApp'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, "<!--": (true), "<routerLink": (true), to: ("/"), }));
({} as { navApp: typeof __VLS_5; }).navApp;
const __VLS_7 = __VLS_6({ ...{}, "<!--": (true), "<routerLink": (true), to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, "<!--": (true), "<routerLink": (true), to: ("/"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : 'routerLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.routerLink : 'router-link' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['router-link'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, to: ("/about"), }));
({} as { RouterLink: typeof __VLS_10; }).RouterLink;
({} as { RouterLink: typeof __VLS_10; }).RouterLink;
const __VLS_12 = __VLS_11({ ...{}, to: ("/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, to: ("/about"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
let __VLS_15!: 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterView : 'routerView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.routerView : 'router-view' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['router-view'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterView'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { RouterView: typeof __VLS_15; }).RouterView;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
