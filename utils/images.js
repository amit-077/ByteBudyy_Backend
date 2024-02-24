const images = [
  {
    tag: "Programming Languages",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553017/63c12849a1c7e9df64c819fc_programming-languages-shutterstock-1680857539_doneya.webp",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553046/photo-1619410283995-43d9134e7656_pdnmnz.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553067/programming-languages_alm8wz.jpg",
    ],
  },
  {
    tag: "GitHub",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553090/images_bjxmfn.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553114/what_is_github_wnay6y.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553137/images_ugrji9.jpg",
    ],
  },
  {
    tag: "Blockchain",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553158/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF9hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaGFpbl9uZV80ZWIwODVmNC0yODFlLTRkYTMtYjdlMS00MmY1ZTFkMDkyM2VfMS5qcGc_ocnpky.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553193/3d-rendering-of-blockchain-on-technology-background_ewqjgy.webp",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553230/photo-1639322537228-f710d846310a_vtiwwb.jpg",
    ],
  },
  {
    tag: "Web3",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553250/neon-web-30-glowing-web-3-abstractneon-glowing-background3d-render-illustration_507676-441_b3arh9.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553273/wp11484809_bwg6bx.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553293/web-3-0-on-futuristic-electronic-board-background-technology-of-decentralized-social-network_mney2f.jpg",
    ],
  },
  {
    tag: "Algorithms",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553317/pngtree-big-data-zero-and-one-data-stream-holographic-image-algorithm-analysis-image_745937_v1s5lk.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553451/green-binary-code-number-matrix-background-computer-cyber-hacker-and-internet-information-security-technology-hacker-computer-algorithm-programmer-hud-interface-and-coding-generative-ai-photo_jwfwwe.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553478/360_F_221782514_qwe8nrnSWiMOGu7AkjhfTNAtScLy7TFo_tb4eh4.jpg",
    ],
  },
  {
    tag: "Cloud",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553501/360_F_507662376_BTKmPlIGBvKlRHWKRNeFt7bj7H2SynQm_fk9pl4.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553526/360_F_413469330_DxibSziCAhvhVHWGNqcdw2KBarvdM6jP_pkd1zh.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553548/3d-render-cloud-computing-circuit-board-background_a9zsma.webp",
    ],
  },
  {
    tag: "Machine Learning",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553576/ai-technology-brain-background-digital-transformation-concept_53876-125206_suhp8k.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553604/concept-ai-machine-learning-artificial-intelligence-robot-learning-network-system-advance-ai-on-blue-futuristic-modern-hi-tech-background-vector_u9awuq.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553623/360_F_199085055_PHnnW6fDvptWOHj6mAVtKiXXYZ4yXc0m_u5zjyk.jpg",
    ],
  },
  {
    tag: "Data Science",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553645/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639_nttpmz.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553670/360_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2_emcwcl.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553694/hand-touching-global-networking-on-data-connection-science-big-data-internet-technology_r4kmy1.jpg",
    ],
  },
  {
    tag: "Big Data",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553714/big-data-background-vector_jjihgo.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553825/big-data-visualization-background-3d-vector-24960351_ypr7o4.jpg",
    ],
  },
  {
    tag: "Python",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553850/3401ee2dbb27776d850e77c6a2bee3d2_epgsuu.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553870/8_nlniyy.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706553901/purple-background-with-a-yellow-hand-shape-made-up-of-names-of-programming-languages-holds-the-word-python-which-is-large_ctcnid.jpg",
    ],
  },
  {
    tag: "PHP",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868388/php-inscription-against-laptop-and-code-background-learn-php-programming-language-computer_snhieq.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868445/php_code-1200x960_cvtaj5.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868490/inline_image_preview_xqenr1.jpg",
    ],
  },
  {
    tag: "WEB DEV",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868598/html-code-on-computer-monitor-software-web-developer-programming-code-photo_z3bkyu.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868656/photo-1593720213428-28a5b9e94613_oq4alo.jpg",
    ],
  },
  {
    tag: "Javascript",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868723/ng7f2nfkwqdumjqfjlle.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868764/javascript-programming-code-abstract-technology-background_272306-155_i4dhne.jpg",
    ],
  },
  {
    tag: "NextJS",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868826/iiu2lrvrjlowf28v8eal.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868862/next-JS-framework_i2z0uu.png",
    ],
  },
  {
    tag: "Swift",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868936/fxirmjq7sann5g6bje94.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706868983/1_S4__g3knEbuuE6qHyWIbNQ_azpjk6.png",
    ],
  },
  {
    tag: "Go",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869051/D5_8E_D5_A5_D5_A2-_D5_AE_D6_80_D5_A1_D5_A3_D6_80_D5_A1_D5_BE_D5_B8_D6_80_D5_B8_D6_82_D5_B4-1_g7c8gv.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869182/5d2e7f3bab992bde80c9cb9e6f6cc520_qex9rl.jpg",
    ],
  },
  {
    tag: "Kotlin",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869265/g3oiakj3qkynfhcckoj9.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869316/0_2Eetx5whBNaMOShT_s8hsrh.png",
    ],
  },
  {
    tag: "SQL",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869374/sql-inscription-against-laptop-and-code-background-learn-sql-programming-language-computer_vjz0mp.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869434/pngtree-sql-against-futuristic-black-and-blue-background-shine-light-circuit-board-photo-image_12589798_mt07bw.jpg",
    ],
  },
  {
    tag: "Databases",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869490/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter_rtu5m5.webp",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869623/depositphotos_251775510-stock-photo-corridor-of-server-room-with_pqwivq.webp",
    ],
  },
  {
    tag: "React Native",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869731/latj0qcdswdwxu1gt7cn.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1706869799/React_jniwxx.jpg",
    ],
  },
  {
    tag: "Ruby",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708772947/ruby-programming-meta-1683275779432_jft4k2.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773065/Ruby-Programming-Tips-and-Tricks_o9poz4.jpg",
    ],
  },
  {
    tag: "SQLite",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773313/images_mmaelb.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773390/maxresdefault_jqs5ut.jpg",
    ],
  },
  {
    tag: "MongoDB",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773463/kuztefjfmcr54smwt-Meta_Blogs_halgag.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773660/kuzt9r42or1fxvlq2-Meta_Generic_twsniz.png",
    ],
  },
  {
    tag: "Java",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773733/wallhaven-2y39jy_k1kmud.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773797/1_pu_q-NQV_EnIHBgHdZsrXQ_fms6ge.png",
    ],
  },
  {
    tag: "Redis",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773866/0_yPHMVJh2NBia_MQ-_dpntp1.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773914/Discover-the-Many-Benefits-of-the-Redis-Database-scaled_gqhwjs.jpg",
    ],
  },
  {
    tag: "Typescript",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708773971/typescript_2d66c7c3_wbubxs.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774039/1_VTW6T-7KkQHPjf4mtfQ0Zg_xdso6q.png",
    ],
  },
  {
    tag: "Dart",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774119/08.20.20-What-is-Dart-and-how-is-it-used_wczlsl.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774196/1_yV65kCLaqJY5zesHIcTpgw_cjzfyg.jpg",
    ],
  },
  {
    tag: "Flutter",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774274/1_lt8tmPdknVSpx2tcL8HizQ_f7dtt0.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774315/1_4vlkTJCWbP2Kh2vyK9BdEw_uecwwz.png",
    ],
  },
  {
    tag: "Laravel",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774494/1_L5z2Oq39ecGqiAqvaXBk3Q_vwhoof.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774533/OG-20_apgbcx.jpg",
    ],
  },
  {
    tag: "Angular",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774615/angular-feature-image_spv68w.png",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774683/angular-space-background-vc7d1crgo8a2pzou_dy0ft5.jpg",
    ],
  },
  {
    tag: "Cyber security",
    image: [
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774826/digital-padlock-with-hud-virtual-screen-on-blue-background-cyber-security-technology-and-privacy-data-network-protection-concept-vector_kedyxk.jpg",
      "https://res.cloudinary.com/dh2wmc2jz/image/upload/v1708774900/India-s-cybersecurity-challenges-can-be-divided-in_1683035049337_tmteb3.jpg",
    ],
  },
];

module.exports = { images };
