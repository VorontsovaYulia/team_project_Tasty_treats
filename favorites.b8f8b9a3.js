var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("eEHR3"),a("1gCDW");var o=a("7rYDH"),n=a("c5nH8"),i=(n=a("c5nH8"),a("8KDTU"));const s=document.querySelector(".favorite-recipes-list"),c=document.querySelector(".hero-section-favorites"),l=document.querySelector(".favorite-filter"),d=document.querySelector(".tui-pagination"),f=document.querySelector(".empty-storage-wrapper");0!==i.default.length?(0,n.createCardTemplate)(i.default,s):(c.classList.add("hero-is-hidden"),l.classList.add("hiddenvisualy"),d.classList.add("hiddenvisualy"),f.classList.remove("hiddenvisualy")),s.addEventListener("click",(function(e){if(e.target.classList.contains("card-template-btn")){!function(e){console.log(e)}(function(e){const t=e.closest(".card-template").dataset.id;return i.default.find((({_id:e})=>e===t))}(e.target))}e.target.classList.contains("js-add-to-fav")&&(!function(e,t){const r=e.closest(".card-template").dataset.id,a=t.findIndex((e=>e._id===r));t.splice(a,1),localStorage.setItem("favorite",JSON.stringify(t))}(e.target,i.default),e.target.closest(".card-template").remove())}));const u=document.querySelector(".favorite-filter-list"),g=document.querySelector(".favorite-recipes-list");(0,o.getAllCategories)().then((e=>{if(0===e.length)throw new Error;const t=e.map((({name:e})=>`<li class="favorite-filter-item" data-category="${e}">\n             <button type="button" class="favorite-filter-btn">\n            ${e}\n             </button>\n            </li>`)).join("");u.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log("Sorry, there are no images matching your search query. Please try again."))),u.addEventListener("click",(function(e){if(e.target.classList.contains("favorite-filter-btn")){const t=function(e){const t=e.closest(".favorite-filter-item").dataset.category;return JSON.parse(localStorage.getItem("favorite")).map((({category:e})=>e===t))}(e.target);(0,n.createCardTemplate)(t,g)}})),a("hDduH"),a("bmAoy"),a("6jlVF"),a("8WEGn"),a("3pS2V"),a("7rYDH"),a("7sOwA");
//# sourceMappingURL=favorites.b8f8b9a3.js.map
