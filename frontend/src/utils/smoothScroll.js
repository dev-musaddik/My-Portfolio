// put this in a utils folder
export const smoothScrollingFunction = (href) => {
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  