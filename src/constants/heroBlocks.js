/** Hero collage  topic-matched imagery (Unsplash CDN, optimized width). Swap URLs anytime. */
const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const HERO_BLOCKS = [
  {
    key: "a",
    title: "AI & edge inference",
    src: u("photo-1677442136019-21780ecad995"),
    srcSet: `${u("photo-1677442136019-21780ecad995", 400)} 400w, ${u("photo-1677442136019-21780ecad995", 800)} 800w`,
    alt: "Abstract neural network and AI visualization",
  },
  {
    key: "b",
    title: "PCB, firmware & bring-up",
    src: u("photo-1518770660439-4636190af475"),
    srcSet: `${u("photo-1518770660439-4636190af475", 400)} 400w, ${u("photo-1518770660439-4636190af475", 800)} 800w`,
    alt: "Electronic circuit board and microchip components",
  },
  {
    key: "c",
    title: "IoT, sensors & gateways",
    src: u("photo-1558618666-fcd25c85cd64"),
    srcSet: `${u("photo-1558618666-fcd25c85cd64", 400)} 400w, ${u("photo-1558618666-fcd25c85cd64", 800)} 800w`,
    alt: "Industrial IoT equipment and sensor hardware",
  },
  {
    key: "d",
    title: "Cloud, APIs & full-stack integration",
    src: u("photo-1629654297299-c8506221ca97"),
    srcSet: `${u("photo-1629654297299-c8506221ca97", 400)} 400w, ${u("photo-1629654297299-c8506221ca97", 800)} 800w`,
    alt: "Dark terminal with code on screen",
  },
];
