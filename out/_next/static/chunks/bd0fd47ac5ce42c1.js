(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62083,e=>{"use strict";var a=e.i(43476);e.i(71645);var t=e.i(22016);e.s(["default",0,function({text:e,link:s,link1:r,link2:i,text1:n,text2:l,text3:o}){return(0,a.jsxs)("div",{className:"under",children:[e&&(0,a.jsx)(t.default,{href:s||"/",children:(0,a.jsx)("h2",{children:e})}),n&&(0,a.jsx)("h2",{children:"/"}),n&&(0,a.jsx)(t.default,{href:r||"#",children:(0,a.jsx)("h2",{children:n})}),l&&(0,a.jsx)("h2",{children:"/"}),l&&(0,a.jsx)(t.default,{href:i||"#",children:(0,a.jsx)("h2",{children:l})}),o&&(0,a.jsx)("h2",{children:"/"}),o&&(0,a.jsx)("h2",{children:o})]})}])},64659,e=>{"use strict";let a=(0,e.i(75254).default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>a],64659)},93261,e=>{"use strict";var a=e.i(43476),t=e.i(71645),s=e.i(22016),r=e.i(57688);e.i(85269);var i=e.i(22831),n=e.i(10308),l=e.i(69620),o=e.i(11152),c=e.i(46660);e.s(["default",0,function({product:e}){let{t:d}=(0,i.useTranslation)(),{mutate:h,isPending:p}=(0,n.useCreateCartItem)(),{mutate:u}=(0,n.useDeleteCartItem)(),{data:m}=(0,n.useCart)(),{settings:x}=(0,c.useSiteSettings)(),[g,b]=(0,t.useState)(!1),f=m?.find(a=>a.product?.id===e?.id||a.product_id===e?.id),w=!!f,y=e?.existing_images?.[0]?.image,j=e?.is_available,v=x?.whatsapp;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"product-card",children:[(0,a.jsx)("div",{className:"product-card__badge",style:{backgroundColor:j?"#94C184":"#E35845"},children:d(j?"card.inStock":"card.outOfStock")}),(0,a.jsx)(s.default,{href:`/productdetail/${e.id}`,children:(0,a.jsx)("div",{className:"product-card__image",children:y?(0,a.jsx)(r.default,{src:y,alt:"product",width:300,height:300}):(0,a.jsx)("div",{className:"image-placeholder",children:(0,a.jsxs)("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:[(0,a.jsx)("circle",{cx:"50",cy:"40",r:"15",stroke:"#ccc",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M30 80 Q50 60 70 80",stroke:"#ccc",strokeWidth:"2",fill:"none"})]})})})}),(0,a.jsxs)("h3",{className:"product-card__article",children:[d("card.article"),": ",e.article]}),(0,a.jsx)("h3",{className:"product-card__title",children:e.name}),(0,a.jsx)("ul",{className:"product-card__features",children:e.description}),(0,a.jsx)("div",{className:"product-card__footer",children:j?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"product-card__price",children:[(0,a.jsxs)("span",{className:"currency",children:[e.bonus||0," ",d("card.bonuses")]}),(0,a.jsxs)("span",{className:"amount",children:[e.price.toLocaleString()," ",d("card.currency")]})]}),(0,a.jsx)("button",{className:"product-card__cart","aria-label":d("card.addToCart"),onClick:()=>{e?.id&&(localStorage.getItem("access_token")?w?u(f.id):h({product_id:e.id,quantity:1}):b(!0))},disabled:p,children:w?(0,a.jsx)(l.IoCart,{size:20}):(0,a.jsx)(l.IoCartOutline,{size:20})})]}):(0,a.jsx)("a",{href:x?.whatsapp??`tel:${x?.phone}`,target:"_blank",rel:"noreferrer",className:"product-card__availability-btn",children:d("card.checkAvailability")})}),j?"":(0,a.jsxs)("a",{href:v,target:"_blank",rel:"noreferrer",className:"product-card__whatsapp",children:[(0,a.jsx)(o.FaWhatsapp,{size:16}),d("card.whatsapp")]})]}),g&&(0,a.jsx)("div",{className:"auth-modal__overlay",onClick:()=>b(!1),children:(0,a.jsxs)("div",{className:"auth-modal",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"auth-modal__close",onClick:()=>b(!1),"aria-label":"Закрыть",children:(0,a.jsx)(l.IoClose,{size:20})}),(0,a.jsx)("div",{className:"auth-modal__icon",children:(0,a.jsx)(l.IoCartOutline,{size:48})}),(0,a.jsx)("h3",{className:"auth-modal__title",children:d("auth.modal.title")}),(0,a.jsx)("p",{className:"auth-modal__text",children:d("auth.modal.description")}),(0,a.jsxs)("div",{className:"auth-modal__actions",children:[(0,a.jsx)(s.default,{href:"/register",className:"auth-modal__btn auth-modal__btn--primary",onClick:()=>b(!1),children:d("auth.modal.register")}),(0,a.jsx)(s.default,{href:"/login",className:"auth-modal__btn auth-modal__btn--secondary",onClick:()=>b(!1),children:d("auth.modal.login")})]})]})})]})}])},99563,e=>{e.v("/_next/static/media/Vector (41).ee8be195.svg")},67168,e=>{e.v("/_next/static/media/Ellipse 4.6ff977a8.svg")},56182,e=>{e.v("/_next/static/media/wallet-tick.6b5046b1.svg")},13079,e=>{e.v("/_next/static/media/Vector (42).e54952c6.svg")},51446,e=>{e.v("/_next/static/media/6.svg fill.a9d5e0fc.svg")},48073,e=>{"use strict";var a=e.i(66027),t=e.i(3284);let s=async()=>{let{data:e}=await t.$api.get("/banners/banners/?category=solution");return e.results},r=async e=>{let{data:a}=await t.$api.get(`/banners/banners/${e}`);return a};e.s(["useSolutionBannerById",0,e=>(0,a.useQuery)({queryKey:["banners","solution",e],queryFn:()=>r(e).then(e=>(console.log(e),e)),enabled:!!e}),"useSolutionBanners",0,()=>(0,a.useQuery)({queryKey:["banners","solution"],queryFn:()=>s()})],48073)},20009,e=>{"use strict";var a=e.i(43476),t=e.i(48073),s=e.i(57688),r=e.i(22016);e.i(71645),e.i(85269);var i=e.i(22831),n=e.i(62083);e.s(["default",0,()=>{let{t:e,i18n:l}=(0,i.useTranslation)(),{data:o=[],isLoading:c}=(0,t.useSolutionBanners)();return c?(0,a.jsx)("div",{className:"loader"}):(0,a.jsx)("section",{className:"w-full bg-[#F5F7FA] py-0 pb-[30px]",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 xl:px-[0px] max-w-[1280px]",children:[(0,a.jsx)(n.default,{text:e("corporateBlock.home"),link:"/",text1:e("corporateBlock.solution")}),(0,a.jsx)("h2",{className:"text-[20px] font-medium md:text-[24px] font-bold text-[#00162A] mb-10",children:e("corporateBlock.title")}),(0,a.jsx)("div",{className:"flex flex-col gap-12",children:o.map(t=>{let i=t.existing_images?.[0]?.image||"";return(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row items-center lg:items-start w-full gap-8",children:[(0,a.jsx)("div",{className:"relative w-full lg:w-[527px] h-[327px] rounded-2xl overflow-hidden shadow-sm bg-gray-200 flex-shrink-0",children:i&&(0,a.jsx)(s.default,{src:i,alt:t.title,fill:!0,priority:1===t.id,sizes:"(max-width: 768px) 100vw, 527px",className:"object-cover"})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col justify-center",children:[(0,a.jsx)("h3",{className:"text-[24px] font-medium lg:text-[24px] text-[#00162A] mb-4 leading-snug",children:t.title}),(0,a.jsx)("p",{className:"text-[15px] lg:text-[16px] text-[#4b5563] leading-relaxed mb-6  h-[99px] overflow-hidden line-clamp-4",children:t.description}),(0,a.jsxs)(r.default,{href:`/solutionDetail/${t.id}`,className:"w-fit text-[15px] font-bold text-[#10B981] hover:text-[#059669] transition-colors flex items-center gap-2",children:[e("corporateBlock.readMore"),(0,a.jsx)("span",{className:"text-xl",children:"→"})]})]}),(0,a.jsx)("div",{className:"hidden lg:block w-[100px]"})]},t.id)})})]})})}])},13654,e=>{"use strict";var a=e.i(66027),t=e.i(54616),s=e.i(12598),r=e.i(5766),i=e.i(3284);let n=async e=>{let{data:a}=await i.$api.get("/banners/banners/",{params:e?{category:e}:{}});return a},l=async e=>{let a=new FormData;a.append("title",e.title),a.append("description",e.description||""),a.append("category",e.category),e.images.forEach(e=>{a.append("images",e)});let{data:t}=await i.$api.post("/banners/banners/",a,{headers:{"Content-Type":"multipart/form-data"}});return t},o=async(e,a)=>{let t=new FormData;return t.append("title",a.title),t.append("description",a.description),t.append("category",a.category),a.images&&a.images[0]instanceof File&&t.append("images",a.images[0]),(await i.$api.put(`/banners/banners/${e}/`,t,{headers:{"Content-Type":"multipart/form-data"}})).data},c=async e=>(await i.$api.delete(`/banners/banners/${e}/`),e);e.s(["useBanners",0,e=>(0,a.useQuery)({queryKey:["banners",e],queryFn:()=>n(e),select:e=>e.results||[],staleTime:3e4}),"useCreateBanner",0,()=>{let e=(0,s.useQueryClient)();return(0,t.useMutation)({mutationKey:["createBanner"],mutationFn:e=>l(e),onSuccess:()=>{e.invalidateQueries({queryKey:["banners"]}),r.toast.success("Баннер успешно добавлен!"),console.log(bannerData)},onError:e=>{console.error("Create banner error:",e);let a=e.response?.data,t="Ошибка создания баннера";a?.title?t=Array.isArray(a.title)?a.title[0]:a.title:a?.images?t=Array.isArray(a.images)?a.images[0]:a.images:a?.message?t=a.message:a?.detail&&(t=a.detail),r.toast.error(t)}})},"useDeleteBanner",0,()=>{let e=(0,s.useQueryClient)();return(0,t.useMutation)({mutationKey:["deleteBanner"],mutationFn:e=>c(e),onSuccess:()=>{e.invalidateQueries({queryKey:["banners"]}),r.toast.success("Баннер удален!")},onError:e=>{console.error("Delete banner error:",e);let a=e.response?.data?.message||e.response?.data?.detail||"Ошибка удаления баннера";r.toast.error(a)}})},"useUpdateBanner",0,()=>{let e=(0,s.useQueryClient)();return(0,t.useMutation)({mutationKey:["updateBanner"],mutationFn:({id:e,bannerData:a})=>o(e,a),onSuccess:()=>{e.invalidateQueries({queryKey:["banners"]}),r.toast.success("Баннер обновлен!")},onError:e=>{console.error("Update banner error:",e);let a=e.response?.data?.message||e.response?.data?.detail||"Ошибка обновления баннера";r.toast.error(a)}})}],13654)},72225,e=>{"use strict";var a=e.i(20519);e.s(["Autoplay",()=>a.default])},14814,e=>{"use strict";var a=e.i(43476),t=e.i(71645),s=e.i(80401);e.i(41983);var r=e.i(86301),i=e.i(72225),n=e.i(15208),n=n,l=e.i(85234),l=l,o=e.i(13654),c=e.i(69620),d=e.i(57688);function h(){let{data:e=[],isLoading:h,error:p}=(0,o.useBanners)("main"),u=(0,t.useRef)(null),m=(0,t.useRef)(null);return h?(0,a.jsx)("div",{className:"loader"}):p?null:(0,a.jsx)("div",{className:"hero-banner container",children:(0,a.jsxs)(s.Swiper,{modules:[r.Pagination,i.Autoplay,n.default,l.default],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0,dynamicBullets:!1},navigation:{prevEl:u.current,nextEl:m.current},onSwiper:e=>{e.params.navigation.prevEl=u.current,e.params.navigation.nextEl=m.current,e.navigation.init(),e.navigation.update()},autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},effect:"fade",fadeEffect:{crossFade:!0},loop:e.length>1,speed:1e3,className:"hero-banner__swiper",children:[e.map(e=>{let t=e.existing_images?.[0]?.image;return(0,a.jsx)(s.SwiperSlide,{children:(0,a.jsxs)("div",{className:"banner-slide",children:[t?(0,a.jsx)(d.default,{src:t,alt:e.title||"banner",width:0,height:0,sizes:"100vw",className:"banner-slide__img",priority:!0}):(0,a.jsx)("div",{className:"banner-slide__fallback"}),(0,a.jsx)("div",{className:"banner-slide__overlay"}),(0,a.jsxs)("div",{className:"banner-slide__content container",children:[(0,a.jsx)("h1",{className:"banner-slide__title",children:e.title}),(0,a.jsx)("p",{className:"banner-slide__subtitle",children:e.description||e.subtitle})]})]})},e.id)}),(0,a.jsx)("button",{ref:u,className:"hero-banner__arrow hero-banner__arrow--prev","aria-label":"Назад",children:(0,a.jsx)(c.IoChevronBack,{size:24})}),(0,a.jsx)("button",{ref:m,className:"hero-banner__arrow hero-banner__arrow--next","aria-label":"Вперёд",children:(0,a.jsx)(c.IoChevronForward,{size:24})})]})})}e.s(["Banner",()=>h],14814)},85799,e=>{"use strict";var a=e.i(43476);e.i(71645);let t={src:e.i(99563).default,width:53,height:51,blurWidth:0,blurHeight:0},s={src:e.i(67168).default,width:53,height:45,blurWidth:0,blurHeight:0},r={src:e.i(56182).default,width:50,height:48,blurWidth:0,blurHeight:0},i={src:e.i(13079).default,width:53,height:53,blurWidth:0,blurHeight:0},n={src:e.i(51446).default,width:55,height:54,blurWidth:0,blurHeight:0};var l=e.i(57688);e.i(85269);var o=e.i(22831);e.s(["default",0,function(){let{t:e}=(0,o.useTranslation)(),c=[{id:1,icon:t,title:e("features.freeDelivery.title"),description:e("features.freeDelivery.description")},{id:2,icon:s,title:e("features.support247.title"),description:e("features.support247.description")},{id:3,icon:r,title:e("features.payment.title"),description:e("features.payment.description")},{id:4,icon:i,title:e("features.qualityGuarantee.title"),description:e("features.qualityGuarantee.description")},{id:5,icon:n,title:e("features.specialOffers.title"),description:e("features.specialOffers.description")}];return(0,a.jsx)("div",{className:"features",children:(0,a.jsx)("div",{className:"features__container container",children:c.map(e=>(0,a.jsxs)("div",{className:"feature-card",children:[(0,a.jsx)("h3",{className:"feature-card__title",children:e.title}),(0,a.jsx)("div",{className:"feature-card__icon",children:(0,a.jsx)(l.default,{src:e.icon,alt:""})}),(0,a.jsx)("p",{className:"feature-card__description",children:e.description})]},e.id))})})}],85799)},39845,e=>{"use strict";var a=e.i(43476);e.i(71645);var t=e.i(80401);e.i(41983);var s=e.i(86301),r=e.i(93261),i=e.i(90801);e.i(85269);var n=e.i(22831);let l=()=>(0,a.jsxs)("div",{className:"card-skeleton animate-pulse",children:[(0,a.jsx)("div",{className:"bg-gray-200 h-48 rounded-lg mb-3"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]})]});function o(){let{t:e}=(0,n.useTranslation)(),{products:o,isLoading:c,isError:d}=(0,i.useProducts)(),h=o.slice(0,10);return d?(0,a.jsxs)("div",{className:"recommendations",children:[(0,a.jsx)("h2",{className:"recommendations__title",children:e("recommendations.title")}),(0,a.jsx)("div",{className:"recommendations__error",children:(0,a.jsx)("p",{className:"text-center text-red-500 py-8",children:e("recommendations.error")})})]}):(0,a.jsxs)("div",{className:"recommendations",children:[(0,a.jsx)("h2",{className:"recommendations__title",children:e("recommendations.title")}),(0,a.jsx)("div",{className:"recommendations-carousel",children:(0,a.jsx)(t.Swiper,{modules:[s.Pagination],spaceBetween:10,slidesPerView:1.5,centeredSlides:!0,pagination:!1,loop:!0,grabCursor:!0,breakpoints:{380:{slidesPerView:1.5,spaceBetween:8,centeredSlides:!0},640:{slidesPerView:2.2,spaceBetween:10,centeredSlides:!1},768:{slidesPerView:3.2,spaceBetween:18,centeredSlides:!1},1024:{slidesPerView:3.2,spaceBetween:20,centeredSlides:!1},1200:{slidesPerView:4,spaceBetween:20,centeredSlides:!1}},className:"recommendationsSwiper",children:c?[...Array(6)].map((e,s)=>(0,a.jsx)(t.SwiperSlide,{children:(0,a.jsx)(l,{})},`skeleton-${s}`)):0===h.length?(0,a.jsx)("div",{className:"w-full text-center py-8 text-gray-500",children:"Нет доступных рекомендаций"}):h.map(e=>(0,a.jsx)(t.SwiperSlide,{children:(0,a.jsx)(r.default,{product:e})},e.id))})})]})}e.s(["Recommendations",()=>o])},42091,e=>{"use strict";var a=e.i(43476);e.i(71645);var t=e.i(80401);e.i(41983);var s=e.i(72225),r=e.i(66027),i=e.i(3284);let n=async()=>{let{data:e}=await i.$api.get("/banners/banners/?category=event");return e};var l=e.i(57688);e.i(85269);var o=e.i(22831);let c=()=>(0,a.jsxs)("div",{className:"bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm animate-pulse",style:{padding:"10px"},children:[(0,a.jsx)("div",{className:"h-[308px] lg:h-[320px] w-full bg-gray-200 rounded-[10px]"}),(0,a.jsxs)("div",{className:"px-2 h-[80px] space-y-2",children:[(0,a.jsx)("div",{className:"h-6 bg-gray-200 rounded w-3/4"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-full"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]});function d(){let{data:e,isLoading:i,error:d}=(0,r.useQuery)({queryKey:["banner"],queryFn:()=>n(),select:e=>e.results||[]}),{t:h}=(0,o.useTranslation)();return(0,a.jsx)("section",{className:"pb-16",children:(0,a.jsxs)("div",{className:"w-full mx-auto px-6 xl:px-0",children:[(0,a.jsx)("h2",{className:"sm:text-5xl text-3xl font-bold md:text-center text-start text-[#1e293b]",style:{marginBottom:"50px"},children:h("news.news")}),d&&!i&&(0,a.jsx)("div",{className:"text-center py-10",children:(0,a.jsx)("p",{className:"text-red-500",children:"Ошибка загрузки новостей"})}),(0,a.jsx)(t.Swiper,{modules:[s.Autoplay],spaceBetween:20,slidesPerView:1.2,centeredSlides:!1,loop:!0,grabCursor:!0,autoplay:{delay:3e3,stopOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}},children:i?[void 0,void 0,void 0].map((e,s)=>(0,a.jsx)(t.SwiperSlide,{children:(0,a.jsx)(c,{})},`skeleton-${s}`)):(e||[]).map(e=>{let s=e.existing_images?.[0]?.image;return(0,a.jsx)(t.SwiperSlide,{children:(0,a.jsxs)("div",{className:"bg-white flex flex-col gap-[10px] rounded-[15px] shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer",style:{padding:"10px"},children:[(0,a.jsx)("div",{className:"h-[308px] lg:h-[320px] w-full bg-[#bfbfbf] rounded-[10px] shrink-0 overflow-hidden relative",children:s?(0,a.jsx)(l.default,{src:s,alt:e.title||"Новость",fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",unoptimized:!0}):(0,a.jsx)("div",{className:"w-full h-full bg-gradient-to-tr from-gray-300 to-gray-200 rounded-[10px] flex items-center justify-center",children:(0,a.jsx)("span",{className:"text-gray-400 text-sm",children:e.category_display})})}),(0,a.jsxs)("div",{className:"px-2 h-[80px]",children:[(0,a.jsx)("h3",{className:"text-[20px] font-semibold text-[#1e293b] mb-2 leading-tight line-clamp-1",children:e.title||"Без названия"}),(0,a.jsx)("p",{className:"text-[#64748b] text-[16px] line-clamp-2",children:e.description||"Описание отсутствует"})]})]})},e.id)})}),!i&&!d&&(!e||0===e.length)&&(0,a.jsx)("div",{className:"text-center py-10",children:(0,a.jsx)("p",{className:"text-gray-500",children:"Новостей пока нет"})})]})})}e.s(["News",()=>d],42091)},70236,e=>{e.v({active:"CatalogButton-module-scss-module__jCUJ7G__active",arrow:"CatalogButton-module-scss-module__jCUJ7G__arrow",catalogButton:"CatalogButton-module-scss-module__jCUJ7G__catalogButton",catalogDropdown:"CatalogButton-module-scss-module__jCUJ7G__catalogDropdown",catalogWrapper:"CatalogButton-module-scss-module__jCUJ7G__catalogWrapper",categoryItem:"CatalogButton-module-scss-module__jCUJ7G__categoryItem",categoryList:"CatalogButton-module-scss-module__jCUJ7G__categoryList",groupName:"CatalogButton-module-scss-module__jCUJ7G__groupName",itemLeft:"CatalogButton-module-scss-module__jCUJ7G__itemLeft",linkItem:"CatalogButton-module-scss-module__jCUJ7G__linkItem",linksList:"CatalogButton-module-scss-module__jCUJ7G__linksList",rotate:"CatalogButton-module-scss-module__jCUJ7G__rotate",subArrow:"CatalogButton-module-scss-module__jCUJ7G__subArrow",subDrawer:"CatalogButton-module-scss-module__jCUJ7G__subDrawer",subGroup:"CatalogButton-module-scss-module__jCUJ7G__subGroup"})},30195,e=>{"use strict";var a=e.i(43476),t=e.i(71645),s=e.i(75254);let r=(0,s.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),i=(0,s.default)("wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),n=(0,s.default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);var l=e.i(51445);let o=(0,s.default)("mouse-pointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]),c=(0,s.default)("hard-drive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]),d=(0,s.default)("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),h=(0,s.default)("speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]),p=(0,s.default)("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),u=(0,s.default)("battery-charging",[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]]),m=(0,s.default)("battery",[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);var x=e.i(64659),g=e.i(63059),b=e.i(70236);let f={network:{title:"Сетевое оборудование",icon:(0,a.jsx)(i,{size:18}),groups:[{name:"Беспроводное оборудование",links:[{name:"Маршрутизаторы (Роутеры)",hasArrow:!0},{name:"Адаптеры Wi-Fi",hasArrow:!1},{name:"Точки доступа",hasArrow:!1}]},{name:"Проводное оборудование",links:[{name:"Коммутаторы (Свитчи)",hasArrow:!1},{name:"Сетевые карты",hasArrow:!1}]}]},components:{title:"Компьютерные комплектующие",icon:(0,a.jsx)(n,{size:18}),groups:[{name:"Основные компоненты",links:[{name:"Процессоры",hasArrow:!1},{name:"Материнские платы",hasArrow:!1},{name:"Видеокарты",hasArrow:!1}]}]},accessories:{title:"Аксессуары",icon:(0,a.jsx)(o,{size:18}),groups:[{name:"Аксессуары для ПК",links:[{name:"Переходники",hasArrow:!1},{name:"Кабели и шнуры",hasArrow:!0},{name:"USB HUB",hasArrow:!1}]}]},components:{title:"Компьютерные комплектующие",icon:(0,a.jsx)(n,{size:18}),groups:[{name:"Основные компоненты",links:[{name:"Процессоры",hasArrow:!1},{name:"Материнские платы",hasArrow:!1},{name:"Видеокарты",hasArrow:!1},{name:"Оперативная память",hasArrow:!1}]},{name:"Охлаждение и питание",links:[{name:"Блоки питания",hasArrow:!1},{name:"Кулеры для процессоров",hasArrow:!1},{name:"Корпуса",hasArrow:!1}]}]},peripherals:{title:"Компьютерная периферия",icon:(0,a.jsx)(l.Monitor,{size:18}),groups:[{name:"Устройства ввода",links:[{name:"Клавиатуры",hasArrow:!1},{name:"Мыши",hasArrow:!1},{name:"Коврики для мыши",hasArrow:!1}]},{name:"Мониторы",links:[{name:"Игровые мониторы",hasArrow:!1},{name:"Кронштейны",hasArrow:!1}]}]},accessories:{title:"Аксессуары",icon:(0,a.jsx)(o,{size:18}),groups:[{name:"Аксессуары для компьютерных устройств",links:[{name:"Переходники",hasArrow:!1},{name:"Кабели и шнуры",hasArrow:!0},{name:"USB HUB",hasArrow:!1},{name:"Кардридеры",hasArrow:!1},{name:"Микрофоны",hasArrow:!1},{name:"Сетевые фильтры",hasArrow:!1},{name:"Электрические удлинители",hasArrow:!1}]},{name:"Аксессуары для ноутбуков и планшетов",links:[{name:"Блоки питания для ноутбуков",hasArrow:!0},{name:"Наклейки на клавиатуру",hasArrow:!1},{name:"Чистящие средства",hasArrow:!1},{name:"Рюкзаки и сумки",hasArrow:!0}]}]},storage:{title:"Носители информации",icon:(0,a.jsx)(c,{size:18}),groups:[{name:"USB накопители",links:[{name:"Флеш накопители 16 GB",hasArrow:!1},{name:"Флеш накопители 32 GB",hasArrow:!1},{name:"Флеш накопители 64 GB",hasArrow:!1},{name:"Флеш накопители 128 GB",hasArrow:!1}]},{name:"Внешние накопители",links:[{name:"HDD внешние",hasArrow:!1},{name:"SSD внешние",hasArrow:!1},{name:"Кейсы для жестких дисков",hasArrow:!1}]}]},office:{title:"Оргтехника",icon:(0,a.jsx)(d,{size:18}),groups:[{name:"Печать",links:[{name:"Принтеры и МФУ",hasArrow:!1},{name:"Картриджи",hasArrow:!1}]}]},audio:{title:"Акустические системы/колонки",icon:(0,a.jsx)(h,{size:18}),groups:[{name:"Звук",links:[{name:"Колонки для ПК",hasArrow:!1},{name:"Портативная акустика",hasArrow:!1},{name:"Саундбары",hasArrow:!1}]}]},smartHome:{title:"Гаджеты для дома",icon:(0,a.jsx)(p,{size:18}),groups:[{name:"Умный дом",links:[{name:"Умные розетки",hasArrow:!1},{name:"IP-камеры",hasArrow:!1},{name:"Датчики",hasArrow:!1}]}]},power:{title:"Источники питания",icon:(0,a.jsx)(u,{size:18}),groups:[{name:"Защита питания",links:[{name:"ИБП (UPS)",hasArrow:!1},{name:"Стабилизаторы напряжения",hasArrow:!1}]}]},batteries:{title:"Аккумуляторы",icon:(0,a.jsx)(m,{size:18}),groups:[{name:"Элементы питания",links:[{name:"Батарейки",hasArrow:!1},{name:"Зарядные устройства для АКБ",hasArrow:!1}]}]}};function w(){let[e,s]=(0,t.useState)(!1),[i,n]=(0,t.useState)(null);return(0,a.jsxs)("div",{className:b.default.catalogWrapper,children:[(0,a.jsxs)("button",{className:b.default.catalogButton,onClick:()=>s(!e),children:[(0,a.jsx)(r,{size:18}),(0,a.jsx)("span",{children:"Каталог"}),(0,a.jsx)(x.ChevronDown,{size:16,className:`${b.default.arrow} ${e?b.default.rotate:""}`})]}),e&&(0,a.jsx)("div",{className:b.default.catalogDropdown,children:(0,a.jsx)("ul",{className:b.default.categoryList,children:Object.entries(f).map(([e,t])=>(0,a.jsxs)("li",{className:b.default.categoryWrapper,children:[(0,a.jsxs)("div",{className:`${b.default.categoryItem} ${i===e?b.default.active:""}`,onClick:()=>{n(i===e?null:e)},children:[(0,a.jsxs)("div",{className:b.default.itemLeft,children:[t.icon,(0,a.jsx)("span",{children:t.title})]}),(0,a.jsx)(g.ChevronRight,{size:14,className:b.default.subArrow})]}),i===e&&(0,a.jsx)("div",{className:b.default.subDrawer,children:t.groups.map((e,t)=>(0,a.jsxs)("div",{className:b.default.subGroup,children:[(0,a.jsx)("h4",{className:b.default.groupName,children:e.name}),(0,a.jsx)("ul",{className:b.default.linksList,children:e.links.map((e,t)=>(0,a.jsx)("li",{className:b.default.linkItem,children:e.name},t))})]},t))})]},e))})})]})}e.s(["default",()=>w],30195)},89910,e=>{"use strict";var a=e.i(43476),t=e.i(71645);let s="996558000222",r=[{id:"whatsapp",label:"WhatsApp",sublabel:`+${s}`,href:`https://api.whatsapp.com/send/?phone=${s}&text&type=phone_number&app_absent=0`,color:"#25D366",bg:"#25D36615",border:"#25D36635",icon:(0,a.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})},{id:"phone",label:"Позвонить",sublabel:`+${s}`,href:`tel:+${s}`,color:"#4FC3F7",bg:"#4FC3F715",border:"#4FC3F735",icon:(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})},{id:"telegram",label:"Telegram",sublabel:`+${s}`,href:`https://t.me/+${s}`,color:"#29B6F6",bg:"#29B6F615",border:"#29B6F635",icon:(0,a.jsx)("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"})})}];function i(){let[e,s]=(0,t.useState)(!1),[i,n]=(0,t.useState)(!1),[l,o]=(0,t.useState)([]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        html {
          font-size: 16px;
        }

        body {
          font-family: 'Sora', sans-serif;
              min-height: 100vh;
          min-height: 100dvh;
        }

        /* ── backdrop ── */
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.28s ease;
        }
        .backdrop.show {
          opacity: 1;
          pointer-events: auto;
        }

        /* ── FAB root ── */
        .fab-root {
          position: fixed;
          bottom: 24px;
          right: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        /* ── desktop ── */
        @media (min-width: 480px) {
          .fab-root {
            bottom: 32px;
            right: 32px;
          }
        }

        /* ── contact list ── */
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        /* ── card ── */
        .contact-card {
          display: flex;
          align-items: center;
          gap: 11px;
          background: rgba(18, 22, 30, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 18px;
          padding: 11px 16px 11px 11px;
          text-decoration: none;
          cursor: pointer;
          opacity: 0;
          transform: translateX(20px) scale(0.9);
          pointer-events: none;
          transition: opacity 0.16s ease, transform 0.18s ease, background 0.18s;
          /* prevent text selection on mobile long-press */
          user-select: none;
          -webkit-user-select: none;
          /* full-width touch target on small screens */
          min-width: 0;
        }

        .contact-card.show {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }

        /* staggered entrance */
        .contact-list .contact-card:nth-child(1).show {
          transition: opacity .22s .05s ease, transform .3s .05s cubic-bezier(.34,1.56,.64,1), background .18s;
        }
        .contact-list .contact-card:nth-child(2).show {
          transition: opacity .22s .11s ease, transform .3s .11s cubic-bezier(.34,1.56,.64,1), background .18s;
        }
        .contact-list .contact-card:nth-child(3).show {
          transition: opacity .22s .17s ease, transform .3s .17s cubic-bezier(.34,1.56,.64,1), background .18s;
        }

        /* hover (desktop) */
        @media (hover: hover) {
          .contact-card:hover {
            background: rgba(255, 255, 255, 0.07);
            transform: translateY(-2px) scale(1.02);
          }
        }

        /* active (mobile touch) */
        .contact-card:active {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(0.97);
        }

        /* ── icon box ── */
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* smaller on very small phones */
        @media (max-width: 360px) {
          .contact-icon {
            width: 38px;
            height: 38px;
            border-radius: 12px;
          }
        }

        /* ── text ── */
        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .contact-name {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1;
          white-space: nowrap;
        }

        .contact-sub {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        @media (max-width: 360px) {
          .contact-name { font-size: 12px; }
          .contact-sub  { font-size: 10px; }
        }

        /* ── FAB button ── */
        .fab-btn {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 18px;
          border: none;
          cursor: pointer;
          outline: none;
          overflow: hidden;
          flex-shrink: 0;
          background: linear-gradient(140deg, #25D366 0%, #128C7E 100%);
          box-shadow:
            0 6px 24px rgba(37, 211, 102, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          transition: transform 0.15s cubic-bezier(.34,1.56,.64,1), box-shadow 0.15s ease;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
        }

        @media (min-width: 480px) {
          .fab-btn {
            width: 62px;
            height: 62px;
            border-radius: 20px;
          }
        }

        @media (hover: hover) {
          .fab-btn:hover {
            transform: scale(1.07) translateY(-2px);
            box-shadow:
              0 14px 40px rgba(37, 211, 102, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.15) inset;
          }
        }

        .fab-btn.pressed {
          transform: scale(0.91) !important;
          box-shadow: 0 3px 12px rgba(37, 211, 102, 0.3) !important;
        }

        .fab-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.32s cubic-bezier(.34,1.56,.64,1);
        }
        .fab-inner.spin { transform: rotate(135deg); }

        /* ripple */
        .ripple {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%) scale(0);
          animation: rip 0.6s ease-out forwards;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes rip {
          to { transform: translate(-50%, -50%) scale(18); opacity: 0; }
        }

        /* pulse ring */
        .pulse {
          position: absolute;
          inset: -5px;
          border-radius: 23px;
          border: 2px solid rgba(37, 211, 102, 0.5);
          animation: pulse-anim 2.4s ease-out infinite;
          pointer-events: none;
        }
        .pulse.off {
          animation: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        @keyframes pulse-anim {
          0%  { transform: scale(1);    opacity: 0.5; }
          70% { transform: scale(1.7);  opacity: 0;   }
          100%{ transform: scale(1.7);  opacity: 0;   }
        }

        /* ── label tooltip on FAB (closed state) ── */
        .fab-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(18, 22, 30, 0.9);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: rgba(255,255,255,0.75);
          font-size: 12px;
          font-family: 'Sora', sans-serif;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 8px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .fab-btn:hover .fab-tooltip {
          opacity: 1;
        }
      `}),(0,a.jsx)("div",{className:`backdrop ${e?"show":""}`,onClick:()=>s(!1)}),(0,a.jsxs)("div",{className:"fab-root",children:[(0,a.jsx)("div",{className:"contact-list",children:r.map(t=>(0,a.jsxs)("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:`contact-card ${e?"show":""}`,style:{boxShadow:e?`0 4px 20px ${t.color}18`:"none"},children:[(0,a.jsx)("div",{className:"contact-icon",style:{background:t.bg,border:`1px solid ${t.border}`,color:t.color},children:t.icon}),(0,a.jsxs)("div",{className:"contact-text",children:[(0,a.jsx)("span",{className:"contact-name",children:t.label}),(0,a.jsx)("span",{className:"contact-sub",children:t.sublabel})]})]},t.id))}),(0,a.jsxs)("button",{className:`fab-btn ${i?"pressed":""}`,onClick:e=>{let a=e.currentTarget.getBoundingClientRect(),t=Date.now();o(s=>[...s,{x:e.clientX-a.left,y:e.clientY-a.top,id:t}]),setTimeout(()=>o(e=>e.filter(e=>e.id!==t)),700),n(!0),setTimeout(()=>n(!1),180),s(e=>!e)},"aria-label":"Связаться с нами",children:[(0,a.jsx)("div",{className:`pulse ${e?"off":""}`}),l.map(e=>(0,a.jsx)("span",{className:"ripple",style:{left:e.x,top:e.y}},e.id)),(0,a.jsx)("span",{className:"fab-tooltip",children:"Связаться"}),(0,a.jsx)("div",{className:`fab-inner ${e?"spin":""}`,children:e?(0,a.jsx)("svg",{width:"21",height:"21",viewBox:"0 0 24 24",fill:"white",children:(0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}):(0,a.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"white",children:(0,a.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})]})]})}e.s(["default",()=>i])}]);