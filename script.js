// Scroll progress bar
(function () {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// Panel reveal + active nav highlighting, driven by one shared observer
(function () {
  const panels = document.querySelectorAll(".panel[id]");
  const navLinks = document.querySelectorAll(".top-nav a");
  if (!panels.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  panels.forEach((panel) => revealObserver.observe(panel));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.nav === id);
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  panels.forEach((panel) => navObserver.observe(panel));
})();

// Keyboard navigation between full-screen panels (ArrowUp / ArrowDown)
(function () {
  const panels = Array.from(document.querySelectorAll(".panel[id]"));
  if (!panels.length) return;

  function currentIndex() {
    const mid = window.scrollY + window.innerHeight / 2;
    let idx = 0;
    panels.forEach((p, i) => {
      if (p.offsetTop <= mid) idx = i;
    });
    return idx;
  }

  window.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    const typing = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
    if (typing) return;

    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      const next = panels[Math.min(currentIndex() + 1, panels.length - 1)];
      next.scrollIntoView({ behavior: "smooth" });
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      const prev = panels[Math.max(currentIndex() - 1, 0)];
      prev.scrollIntoView({ behavior: "smooth" });
    }
  });
})();

// Read-more toggles for longer project notes
(function () {
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    const note = btn.nextElementSibling;
    if (!note || !note.classList.contains("project-note")) return;
    btn.addEventListener("click", () => {
      const open = note.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open
        ? btn.textContent.replace("Read more", "Read less").replace("›", "‹")
        : btn.textContent.replace("Read less", "Read more").replace("‹", "›");
    });
  });
})();

// Live character count for the contact message field
(function () {
  const textarea = document.querySelector('.contact-form textarea[name="message"]');
  const counter = document.getElementById("charCount");
  if (!textarea || !counter) return;
  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
  });
})();