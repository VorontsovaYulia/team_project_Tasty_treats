!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("i8Q71"),a("4Qm2O");var o,n=a("boQj9"),i=(n=a("boQj9"),a("QPNXd")),c=a("b7ONl"),l="favorite",s=document.querySelector(".favorite-recipes-list"),d=document.querySelector(".hero-section-favorites"),u=document.querySelector(".favorite-filter"),f=document.querySelector(".tui-pagination"),v=document.querySelector(".empty-storage-wrapper"),m=null!==(o=JSON.parse(localStorage.getItem(l)))&&void 0!==o?o:[];0!==m.length?((0,n.createCardTemplate)(m,s),document.querySelectorAll(".js-add-to-fav").forEach((function(e){return e.checked=!0}))):(d.classList.add("hero-is-hidden"),u.classList.add("hiddenvisualy"),f.classList.add("hiddenvisualy"),v.classList.remove("hiddenvisualy"));s.addEventListener("click",(function(e){if(e.target.classList.contains("card-template-btn")){var t=(r=e.target,a=r.closest(".card-template").dataset.id,m.find((function(e){return e._id===a})));(0,i.popUpFunction)(t)}var r,a;e.target.classList.contains("js-add-to-fav")&&((0,c.removeFromFavorites)(l,e.target,m),e.target.closest(".card-template").remove())}));var g,p,y=document.querySelector(".favorite-filter-list"),S=document.querySelector(".favorite-recipes-list"),b=document.querySelector(".all-category"),h=null!==(g=JSON.parse(localStorage.getItem(l)))&&void 0!==g?g:[],L=0,q=h.flatMap((function(e){return e.category})).filter((function(e,t,r){return r.indexOf(e)===t}));q.sort((function(e,t){return e.localeCompare(t)})),p=q.map((function(e){return'<li class="favorite-filter-item" data-category="'.concat(e,'">\n             <button type="button" class="favorite-filter-btn">\n            ').concat(e,"\n             </button>\n            </li>")})).join(""),y.insertAdjacentHTML("beforeend",p),y.addEventListener("click",(function(e){if(e.target.classList.contains("favorite-filter-btn")){if(b.classList.remove("favorite-active-btn"),0!=L)document.querySelector(".favorite-filter-btn.in-focus").classList.remove("in-focus"),L=0;var t=(r=e.target,a=JSON.parse(localStorage.getItem(l)),(o=r.closest(".favorite-filter-item").dataset.category)?a.filter((function(e){return e.category===o})):a);(0,n.createCardTemplate)(t,S),document.querySelectorAll(".js-add-to-fav").forEach((function(e){return e.checked=!0}))}var r,a,o})),S.addEventListener("click",(function(e){if(e.target.classList.contains("js-add-to-fav")){var t=e.target.closest(".card-template").dataset.id,r=h.find((function(e){return e._id===t}));if((h=JSON.parse(localStorage.getItem(l))).some((function(e){return e.category===r.category})))return document.querySelector('li[data-category="'.concat(r.category,'"]')).firstElementChild.classList.add("in-focus"),void(L+=1);document.querySelector('li[data-category="'.concat(r.category,'"]')).remove(),L=0,0===h.length&&b.remove()}})),a("OtYKr"),a("dEcaA"),a("fz8By"),a("QPNXd"),a("lubkt"),a("b7ONl"),a("bfaTO")}();
//# sourceMappingURL=favorites.546bdb10.js.map
