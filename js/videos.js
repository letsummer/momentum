const videos = [
    "https://www.youtube.com/embed/BWxJK_Znleo",
"https://www.youtube.com/embed/V3k-A-cuQNw",
"https://www.youtube.com/embed/59-9Z9KQTEg",
"https://www.youtube.com/embed/Awzyt3FC1K0",
"https://www.youtube.com/embed/z0UrtF-GMB8",
"https://www.youtube.com/embed/PbrHdHvGsm0",
"https://www.youtube.com/embed/IZgVLvuF4vE",
"https://www.youtube.com/embed/hdNS-Yy-M48",
"https://www.youtube.com/embed/xxyDz3gp2ic",
"https://www.youtube.com/embed/Ejj8Tai9seo",
"https://www.youtube.com/embed/CO0a5YdBTwE",
"https://www.youtube.com/embed/4djxHD8L9j4",
"https://www.youtube.com/embed/EwaUOnbgtPA",
"https://www.youtube.com/embed/YkurfxloEg4",
"https://www.youtube.com/embed/t-mghdhsTl4",
"https://www.youtube.com/embed/W6IXdH0spP4",
"https://www.youtube.com/embed/153cIYWi-XE",
"https://www.youtube.com/embed/B7OAaiC3AmA",
"https://www.youtube.com/embed/Okc73A6h3G8",
"https://www.youtube.com/embed/7WMtN4p2Vq4",
"https://www.youtube.com/embed/sMeiqDB3vxE",
"https://www.youtube.com/embed/Z1OUyp0L8lA",
"https://www.youtube.com/embed/_rapw5U6ahw",
"https://www.youtube.com/embed/PLCe6pGwF6Y",
"https://www.youtube.com/embed/gz8fclCRS4s",
"https://www.youtube.com/embed/jaldHjoRKdg",
"https://www.youtube.com/embed/wfh4vlpKBJw",
"https://www.youtube.com/embed/TIVk8VlsxXw",
"https://www.youtube.com/embed/ay6cF-RTPW8",
"https://www.youtube.com/embed/wr49Fq2vfUA",
"https://www.youtube.com/embed/_049liGI8lY",
"https://www.youtube.com/embed/H34yPeCnB58",
"https://www.youtube.com/embed/PrHlLU8eY78",
"https://www.youtube.com/embed/V_Zg0haDkxE",
"https://www.youtube.com/embed/WEth5fer11Q",
"https://www.youtube.com/embed/k8d81OYstr0",
"https://www.youtube.com/embed/8E0JMHXI2gk",
"https://www.youtube.com/embed/x7G87vYDIqw",
"https://www.youtube.com/embed/s5m1wZJG4pg",
"https://www.youtube.com/embed/OGMfjWRDlnE",
"https://www.youtube.com/embed/NCN3H-RFGr4",
"https://www.youtube.com/embed/xEcXdl2A60U",
"https://www.youtube.com/embed/7HT5CnoF-tI",
"https://www.youtube.com/embed/bAVBkvqFb54",
"https://www.youtube.com/embed/kblmsc4uQGw",
"https://www.youtube.com/embed/SOqzimAh3KY",
"https://www.youtube.com/embed/eBiP2NFKah0",
"https://www.youtube.com/embed/rChRrEj9DRE",
"https://www.youtube.com/embed/rjhldyAGOKk",
"https://www.youtube.com/embed/thVdRy8KVB4",
"https://www.youtube.com/embed/gLtIRS7b5z0",
"https://www.youtube.com/embed/gvXCTLoZdcI",
"https://www.youtube.com/embed/4jxORdr76_o",
"https://www.youtube.com/embed/SkVmgTLXmno",
"https://www.youtube.com/embed/O_gcrCbMF5w",
"https://www.youtube.com/embed/-nxtIyX0HQ8",
"https://www.youtube.com/embed/IF3oDfchUDQ",
"https://www.youtube.com/embed/buqkDsswzJM",
"https://www.youtube.com/embed/I1vbAIyusiU",
"https://www.youtube.com/embed/LGsO6MSuec8",
"https://www.youtube.com/embed/E2aFk72JzLA",
"https://www.youtube.com/embed/Wi05bynGjuc",
"https://www.youtube.com/embed/CIbGzN8_ujc",
"https://www.youtube.com/embed/78h2Q3OqFho",
"https://www.youtube.com/embed/m_yP37XNMtI",
"https://www.youtube.com/embed/KaaSQ6Bg1Ok",
"https://www.youtube.com/embed/SgwFyGbiyBA",
"https://www.youtube.com/embed/siOTSPPmlKM",
"https://www.youtube.com/embed/J-VR07pTJQQ",
"https://www.youtube.com/embed/QIfATfD9fb8",
"https://www.youtube.com/embed/qmI-b1T3x7E",
"https://www.youtube.com/embed/ftCzbDLI7WU",
"https://www.youtube.com/embed/c8pw7wOzFGA",
"https://www.youtube.com/embed/-eOLbQ57suE",
"https://www.youtube.com/embed/3BtNLR7TQrM",
"https://www.youtube.com/embed/jvDhbXO5Qek",
"https://www.youtube.com/embed/eTAisefXyoY",
"https://www.youtube.com/embed/0y5rhtRy0uM",
"https://www.youtube.com/embed/4vQm0VHhpwI",
"https://www.youtube.com/embed/47ZlVjm9DY0",
"https://www.youtube.com/embed/TeT3-kzl8fA",
"https://www.youtube.com/embed/uktEik62l8k",
"https://www.youtube.com/embed/_b5B6M3gWUo",
"https://www.youtube.com/embed/ze8YO6zoAFA",
"https://www.youtube.com/embed/hkHuFZACke0",
"https://www.youtube.com/embed/9HVyyvA59cM",
"https://www.youtube.com/embed/DHITAzSPWLk",
"https://www.youtube.com/embed/d8Aja-VIJ0Y",
"https://www.youtube.com/embed/BOIvbC__hWM",
"https://www.youtube.com/embed/igID3chTOnk",
"https://www.youtube.com/embed/Mm5JGU2QbXM",
"https://www.youtube.com/embed/vgWJrayioLE",
"https://www.youtube.com/embed/xsMMjFwR5aE",
"https://www.youtube.com/embed/8jjN60oAXTY",
"https://www.youtube.com/embed/lyyzD3gWAsM",
"https://www.youtube.com/embed/-ECqExvwjn8",
"https://www.youtube.com/embed/bCdSrCyuuy0",
"https://www.youtube.com/embed/FSu-FsCT7Zg",
"https://www.youtube.com/embed/cOKhq6MWVCg",
"https://www.youtube.com/embed/ce3U83oxLYE",
];

const iframe = document.querySelector(".baseball iframe");
// const author = document.querySelector(".quote span:nth-child(2)");

const todayVideo = videos[Math.floor(Math.random() * videos.length)];

// console.log(todayVideo);

iframe.setAttribute('src', todayVideo);