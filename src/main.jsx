import React from "react";
import { createRoot } from "react-dom/client";
import { DefenseLines } from "@designcodeio/threeui/components/DefenseLines";
import { InterfaceLines } from "@designcodeio/threeui/components/InterfaceLines";
import { ConstellationField } from "@designcodeio/threeui/components/ConstellationField";
import "@designcodeio/threeui/style.css";
import "../styles-valorant.css";

function mountWhenVisible(id, effect) {
  const host = document.getElementById(id);
  if (!host) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    createRoot(host).render(effect);
    observer.disconnect();
  }, { rootMargin: "140px" });
  observer.observe(host);
}

mountWhenVisible("threeui-hero-lines", <DefenseLines mode="light" speed={0.22} size={0.65} length={0.82} density={0.42} opacity={0.48} hue={0} className="threeui-canvas" />);
mountWhenVisible("threeui-work-lines", <InterfaceLines mode="light" speed={0.18} size={0.7} length={0.8} density={0.48} opacity={0.22} className="threeui-canvas" />);
mountWhenVisible("threeui-experience-lines", <ConstellationField variant="particle-drift" mode="dark" speed={0.1} size={0.42} length={0.68} density={0.2} opacity={0.19} hue={0} className="threeui-canvas" />);
mountWhenVisible("threeui-profile-lines", <ConstellationField variant="topo-field" mode="light" speed={0.08} size={0.56} length={0.78} density={0.14} opacity={0.12} hue={0} className="threeui-canvas" />);
mountWhenVisible("threeui-people-lines", <InterfaceLines mode="dark" speed={0.14} size={0.48} length={0.7} density={0.16} opacity={0.18} hue={0} className="threeui-canvas" />);

const peopleSection = document.querySelector("#people");
const peopleCards = [...document.querySelectorAll("#people .persona")];
if (peopleSection && peopleCards.length && "IntersectionObserver" in window) {
  peopleSection.classList.add("motion-ready");
  const peopleObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.16, rootMargin: "0px 0px -5% 0px" });
  peopleCards.forEach((card) => peopleObserver.observe(card));
} else {
  peopleCards.forEach((card) => card.classList.add("is-visible"));
}

function revealOnScroll(sectionSelector, itemSelector, threshold = 0.12) {
  const section = document.querySelector(sectionSelector);
  const items = [...document.querySelectorAll(`${sectionSelector} ${itemSelector}`)];
  if (!section || !items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  section.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries, activeObserver) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    }
  }, { threshold, rootMargin: "0px 0px -4% 0px" });
  items.forEach((item) => observer.observe(item));
}

revealOnScroll("#experience", ".career-row", 0.08);
revealOnScroll(".creative-bridge", "> *", 0.1);

const featured = document.querySelector("#featured");
if (featured && "MutationObserver" in window) {
  const featuredObserver = new MutationObserver(() => {
    if (!featured.querySelector(".card")) return;
    revealOnScroll("#work", "#featured .card", 0.12);
    featuredObserver.disconnect();
  });
  featuredObserver.observe(featured, { childList: true });
}
