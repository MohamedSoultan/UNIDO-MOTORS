// awarness
var awarness_reco = new Splide(".awarness_reco", {
    type: "loop",
    gap: "2rem",
    perPage: 2,
    breakpoints: {
      576: {
        perPage: 1,
        pagination: false,
      },
      992: {
        perPage: 2,
      },
    },
  });
  awarness_reco.mount();