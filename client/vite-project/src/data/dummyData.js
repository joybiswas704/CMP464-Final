export let productList = [
     {
          id: 1,
          name: 'Spider-Man 2',
          price: '69.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548298_sd.jpg;maxHeight=640;maxWidth=550',
          des: "Marvel's Spider-Man 2 Launch Edition - PlayStation 5",
     },
     {
          id: 2,
          name: 'Star Wars Jedi: Survivor',
          price: '34.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6528/6528657_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'Star Wars Jedi: Survivor Standard Edition - PlayStation 5',
     },
     {
          id: 3,
          name: 'Ghost of Tsushima',
          price: '69.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470670_sd.jpg;maxHeight=640;maxWidth=550',
          des: "Ghost of Tsushima Director's Cut - PlayStation 5",
     },
     {
          id: 4,
          name: 'Avatar: Frontiers of Pandora',
          price: '69.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548130_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'Avatar: Frontiers of Pandora Standard Edition - PlayStation 5',
     },
     {
          id: 5,
          name: 'Madden NFL 24',
          price: '32.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547578_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'Madden NFL 24 Standard Edition - PlayStation 5',
     },
     {
          id: 6,
          name: 'NBA 2K24',
          price: '34.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6550/6550657_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'NBA 2K24 Kobe Bryant Edition - PlayStation 5',
     },
     {
          id: 7,
          name: 'Grand Theft Auto V',
          price: '39.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503672_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'Grand Theft Auto V Standard Edition - PlayStation 5',
     },
     {
          id: 8,
          name: 'God of War Ragnarök',
          price: '69.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523243_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'God of War Ragnarök Standard Edition - PlayStation 5',
     },
     {
          id: 9,
          name: 'RoboCop',
          price: '59.99',
          img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536644_sd.jpg;maxHeight=640;maxWidth=550',
          des: 'RoboCop: Rogue City - PlayStation 5',
     },
];

export let orderData = [];

export function removesProduct(id) {
     productList = productList.filter((product) => product.id !== id);
}
