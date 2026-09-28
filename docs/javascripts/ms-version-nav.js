/* MysterSmith — contextual version submenu for "What's new".
   Shows previously documented versions nested under the current "What's new"
   menu item, but ONLY while viewing one of the version pages. */
(function () {
  // All documented "What's new" versions, newest first.
  // Add a new line here whenever a version gets its own page.
  var VERSIONS = [
    { label: "v2.3.11 (current)", path: "/about-mystersmith/whats-new/" },
    { label: "v2.2.71",           path: "/about-mystersmith/whats-new-v2-2-71/" },
    { label: "v2.2.41",           path: "/about-mystersmith/whats-new-v2-2-41/" }
  ];
  // The menu item these versions nest under (the current "What's new" page).
  var PARENT_PATH = "/about-mystersmith/whats-new/";

  function norm(p) {
    if (!p) return "/";
    try { p = new URL(p, location.href).pathname; } catch (e) {}
    if (p.charAt(p.length - 1) !== "/") p += "/";
    return p;
  }

  function onVersionPage() {
    var here = norm(location.pathname);
    return VERSIONS.some(function (v) { return norm(v.path) === here; });
  }

  // Only the LEFT (primary) navigation — never the right-hand "On this page"
  // table of contents, whose in-page anchors all share this page's pathname.
  // The primary nav can appear more than once (drawer + lifted sidebar),
  // so decorate every matching "What's new" link we find there.
  function eachParentLink(cb) {
    var target = norm(PARENT_PATH);
    var links = document.querySelectorAll(".md-sidebar--primary nav.md-nav a.md-nav__link");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href") || "";
      if (href.indexOf("#") > -1) continue;          // skip in-page anchors
      if (norm(href) === target) cb(links[i]);
    }
  }

  function buildItem(v, hereNorm) {
    var li = document.createElement("li");
    li.className = "md-nav__item ms-version-item";
    var a = document.createElement("a");
    a.className = "md-nav__link";
    a.href = v.path;
    if (norm(v.path) === hereNorm) a.className += " md-nav__link--active";
    var span = document.createElement("span");
    span.className = "md-ellipsis";
    span.textContent = v.label;
    a.appendChild(span);
    li.appendChild(a);
    return li;
  }

  function expandAncestors(el) {
    var node = el;
    while (node && node !== document.body) {
      if (node.tagName === "LI" && node.classList &&
          node.classList.contains("md-nav__item--nested")) {
        var toggle = node.querySelector(":scope > input.md-nav__toggle");
        if (toggle) toggle.checked = true;
        node.classList.add("md-nav__item--active");
      }
      node = node.parentNode;
    }
  }

  function init() {
    if (!onVersionPage()) return;             // only on version pages
    var hereNorm = norm(location.pathname);

    eachParentLink(function (link) {
      var li = link.closest ? link.closest(".md-nav__item") : null;
      if (!li || li.classList.contains("ms-has-versions")) return; // once per item
      li.classList.add("md-nav__item--active", "ms-has-versions");
      link.classList.add("md-nav__link--active");

      // Insert version rows as siblings right after "What's new".
      var frag = document.createDocumentFragment();
      VERSIONS.forEach(function (v) { frag.appendChild(buildItem(v, hereNorm)); });
      li.parentNode.insertBefore(frag, li.nextSibling);

      expandAncestors(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
