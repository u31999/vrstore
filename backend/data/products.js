const products = [
  {
    name: 'Sony Playstation VR Headset',
    image: '/images/sony-ps-vr.jpeg',
    description:
    "Enter the virtual world with this PSVR bundle for the PlayStation 4.\
     The headset has 3D audio processing to fully immerse you into game play,\
      and its six-axis motion-sensing system provides a more realistic experience.\
       The headset in this PSVR bundle is designed for comfort, so it's like it's not even there.\
       \\n Step into your favorite games and experience them as if there in real life. ",
    brand: 'Sony',
    category: 'PC',
    price: 319.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Meta Quest 2 - VR Headset - 128GB',
    image: '/images/Meta-quest-2.jpeg',
    description:
      "Step inside new realities with Meta Quest 2, our most advanced VR system yet. Explore new dimensions of gaming,\
       social and entertainment, or revolutionize your fitness regime. With no wires, no limits and no PC or console\
       required, you'll be ready to go within minutes by setting up using the Meta Quest smartphone app, your Facebook \
       account and a wireless internet connection. An incredible multi-sensory experience immerses you in cinematic, \
       3D positional audio through built-in speakers, while mind-blowing high resolution graphics mean you see every \
       detail of every virtual world, even when you're moving at speed. An integrated 10,000mAh battery giving up to \
       three hours gameplay or ten hours of entertainment combined with a comfort-driven design lets you explore \
       deeper and further for longer, every time you step into VR. Choose between 128GB and 256GB options to meet \
       the realities of your budget and your VR memory needs. Intuitive Touch controllers transport your movements \
       directly into VR. Explore over 1,000 titles by connecting your VR headset to a gaming-compatible computer with \
       an Meta Quest Link cable (PC and cable sold separately). Share the experience with virtual social spaces, \
       multi-player gaming and virtual stadiums. Let others watch your performance by casting your VR experience \
       to compatible TVs and other screens. There's no end to what you can play, create and discover with \
       Meta Quest 2. Meta Quest packaging will continue to carry the Oculus name and logo during the transition \
       to our new branding.",
    brand: 'Oculus',
    category: 'Headset',
    price: 299.00,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Valve Index VR Full Kit',
    image: '/images/valve-index-vr-fullkit.jpeg',
    description:
      "Let Valve Index immerse you into the virtual world. With 2K screen resolutions and 120hz refresh rates, \
      you'll be able to enjoy a complete virtual reality experience like you've never felt before. The headset \
      includes headphones that rest off the ears for optimal comfort, as well as soft cushioning in front of the display.",
    brand: 'Valve Index',
    category: 'PC',
    price: 1199.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'VR Glasses Sticker Protective Decal',
    image: '/images/Glasses-sticker-protecter-decal.jpeg',
    description:
      'Smooth and thin vinyl sticker protects your VR 2 controller from dust, fingerprints and scratches',
    brand: 'Atralife',
    category: 'Accessories',
    price: 11.41,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'DPVR P1 Pro 4K UHD Standalone VR Headset',
    image: '/images/dpvr-p1-pro-4k-headset.jpeg',
    description:
      'Game and animation all in one - The best experience.\\n \
      Using 4K standard RGB arrangement to prevent vertigo screen. \
      Quiddy response. Resolution up to 3840x2160 makes details clearly appear. \
      High color regions recegnee each pixel of the natural primary color.',
    brand: 'DPVR',
    category: 'Headset',
    price: 409,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Quest 2 (Oculus) Carrying Case',
    image: '/images/carring-case-oculus.jpeg',
    description:
      "Designed for Oculus Quest 2, this lightweight case provides sturdy protection whether you're at home or on the go. \
      The interior fits the headset with optional Elite Strap or Elite Strap With Battery, and molded dividers hold the \
      two Touch controllers, charging cable and power adapter",
    brand: 'Meta Quest',
    category: 'Accessories',
    price: 49,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'HTC VIVE Cosmos VR Headset',
    image: '/images/htc-vive-cosmos.jpeg',
    description:
      "Venture into the next era of virtual reality with VIVE Cosmos, a system designed to maximize simplicity, \
      experience, and possibility.\\n Enjoy accurate inside-out tracking, right out of the box? no base stations required.\\n \
      Play where you want, when you want with a portable design and compatibility with a range of VR-ready PCs. \
      Explore VR with expansive movement coverage and a wide tracking field-of-view powered by 6 tracking cameras. \
      Find your perfect fit with an adjustable headstrap. Sharpen your focus and get a clearer view with an adjustable \
      interpupillary distance (IPD) dial. Immerse yourself in VR experiences through 2880 x 1700 combined-resolution \
      displays with a fluid 90hz refresh rate. Snap back to reality with a flip-up display and removable on-ear headphones.\\n \
      Future-proof your Cosmos with next-generation faceplate mods, powerful cordless play, and upcoming extended reality \
      experiences.",
    brand: 'HTC',
    category: 'PC',
    price: 890,
    countInStock: 5,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Skywin VR Stand - Headset Display and Cable',
    image: '/images/skywin-headset.jpeg',
    description:
      "Skywin VR Headset Stand | Display stand and cable organizer for VR Headsets | \
      Compatible with PSVR, Oculus Rift, HTC Vive | High Quality ABS Stand | VR Headset Sold Seperately",
    brand: 'Skywin',
    category: 'Headset',
    price: 39.10,
    countInStock: 12,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'PS4 &PSVR Move Motion Controller',
    image: '/images/Motion-controller-sony.jpeg',
    description:
      "Give yourself a wonderful and immersive gaming experience with this PS4 &PSVR Move Motion Controller. \
      It can be used with compatible PlayStation VR games. This bulk PS4 controller features advanced motion sensing \
      and light tracking technology, so you can raise your game to the next level. Its face and trigger buttons are \
      easy to reach, so you can quickly react to your surroundings. This controller also has outstanding vibration \
      feedback to enhance your overall experience. It's lightweight to make it easier to use and move around.",
    brand: 'Meta Quest',
    category: 'Accessories',
    price: 77.95,
    countInStock: 7,
    rating: 2,
    numReviews: 3,
  },
  {
    name: 'IMSHIE 2PCS Headset with Remote Controller',
    image: '/images/imshie-2pcs-headset.jpeg',
    description:
      "High - precision lens 3D VR glasses provide you with a 360 - degree panoramic view. You can watch and walk, \
      following a game or movie scene, making you feel like you are there. Stereo headphones allow you to enjoy an \
      amazing 3D experience while watching movies or playing games without any interference.",
    brand: 'IMSHIE',
    category: 'Headset',
    price: 47.69,
    countInStock: 26,
    rating: 1,
    numReviews: 32,
  },
  {
    name: 'Quest (Oculus) Link Virtual Reality Cable',
    image: '/images/link-cable.jpeg',
    description:
      "This 16-foot (5 m) USB 3 Type-C cable connects your Quest or Quest 2 to a compatible gaming PC, letting you \
      access a wide range of PC VR games from the action-packed Oculus Rift library. The lightweight, flexible design \
      provides a best-in-class experience. Content, PC and VR headset not included.",
    brand: 'Meta Quest',
    category: 'Accessories',
    price: 64.75,
    countInStock: 112,
    rating: 5,
    numReviews: 67,
  },
  {
    name: 'IMSHIE 2PCS Glasses Full-screen',
    image: '/images/imishie-glasses-full-screen.jpeg',
    description:
      "with A Large Headset: The VR glasses with a large headset provides a great experience. The sound quality is \
      strong and stable, the large screen frame is detachable, both large and small screen phones are available \
      (maximum support 7 inches screen phone).",
    brand: 'IMSHIE',
    category: 'Accessories',
    price: 49,
    countInStock: 2,
    rating: 5,
    numReviews: 15,
  }
]

export default products