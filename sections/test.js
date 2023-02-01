// awarness

var awarness_guids = new Splide(".awarness_guids", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  perPage: 3,
  breakpoints: {
    576: {
      perPage: 1,
      pagination: false,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
awarness_guids.mount();

var awarness_posts = new Splide(".awarness_posts", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  perPage: 3,
  breakpoints: {
    576: {
      perPage: 1,
      pagination: false,
    },
    992: {
      perPage: 2,
    },
    1350: {
      perPage: 3,
    },
  },
});
awarness_posts.mount();

var awarness_reco = new Splide(".awarness_reco", {
  type: "loop",
  prev: "splide__arrow--prev .btn-n",
  next: "splide__arrow--next .btn-r",
  gap: "2rem",
  // padding:"250px",
  perPage: 2,
  breakpoints: {
    992: {
      perPage: 1,
    },
    1350: {
      perPage: 3,
    },
  },
});

awarness_reco.mount();
// end awarness