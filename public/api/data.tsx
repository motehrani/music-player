import { randomUUID as uuidv4 } from 'crypto'

function ChillHop() {
  return [
    {
      name: 'Sandy Shores',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
      artist: 'Arbour, G Mills',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28967',
      color: ['#45404C', '#B5C7D3'],
      id: uuidv4(),
      active: true,
    },
    //2
    {
      name: 'Street Glow',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
      artist: 'Kreatev',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28973',
      color: ['#45404C', '#B5C7D3'],
      id: uuidv4(),
      active: false,
    },
    {
      //3
      name: 'Valse',
      cover:
        'https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg',
      artist: 'Plusma, Guillaume Muschalle',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28897',
      color: ['#85AFA5', '#FEFCC9'],
      id: uuidv4(),
      active: false,
    },
    {
      //4
      name: 'Faces',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg',
      artist: 'Knowmadic',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9149',
      color: ['#B4965E', '#055C4F'],
      id: uuidv4(),
      active: false,
    },
    {
      //5
      name: 'burn my mind',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg',
      artist: 'Tesk',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8137',
      color: ['#B4965E', '#055C4F'],
      id: uuidv4(),
      active: false,
    },
    {
      //6
      name: 'Awakening',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/3599aa307a704376e6a680b13bdbdb37d76a83ed-1024x1024.jpg',
      artist: "j'san",
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7953',
      color: ['#D288C3', '#1AD7F5'],
      id: uuidv4(),
      active: false,
    },
  ]
}

export default ChillHop
