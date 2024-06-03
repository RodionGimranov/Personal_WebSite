const techColors = {
  ".html_tech": "#E34C26",
  ".css_tech": "#2965F1",
  ".scss_tech": "#C4538C",
  ".js_tech": "#F1E05A",
  ".vue_tech": "#3DD68C",
  ".vite_tech": "#646CFF",
  ".gsap_tech": "#0AE448",
  ".matter_tech": "#82D1BE",
  ".day_js_tech": "#FF5F4C",
  ".vue_i18n_tech": "#51B8AE",
  ".vueRouter_tech": "#3DD68C",
  ".three_js_tech": "#FFFFFF",
};

for (const selector in techColors) {
  document.querySelectorAll(selector).forEach((element) => {
    element.style.backgroundColor = techColors[selector];
  });
}
