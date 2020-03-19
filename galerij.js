const Images = [
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/1/4/5/5/9200000042755541.jpg',
    'https://www.alletop10lijstjes.nl/wp-content/uploads/2017/01/Frank-Ocean-%E2%80%93-Blond.jpg',
    'https://images0.persgroep.net/rcs/ho6ginHmSNe8mE6R3jf4mTHCkYo/diocontent/63054987/_crop/31/22/839/855/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9',
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/3/6/0/9200000073620638.jpg',
    'https://www.homecinemamagazine.nl/wp-content/uploads/2017/02/beste-muziek-audiosysteem.jpg',
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/9/2/5/9200000096355296.jpg',
    'https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTY5OTQ3NzA0NTQ4NDAyNTUz/mac-miller-circles-art.webp',
    'https://media.pitchfork.com/photos/5e1cf1ac3c7695000833803c/1:1/w_320/circles.jpeg',
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/8/1/7/9200000101807182.jpg',
    'http://www.icce.rug.nl/~soundscapes/VOLUME03/IMAGES/Queen02.JPG',
    'http://www.icce.rug.nl/~soundscapes/VOLUME03/IMAGES/Queen01.JPG',
    'http://www.icce.rug.nl/~soundscapes/VOLUME03/IMAGES/Queen03.JPG',
    'https://media.hitparade.ch/cover/200/elton_john-alle_hits_a.jpg',
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/5/6/9/6/1000004001216965.jpg',
    'https://i.guim.co.uk/img/media/aa9eb38a01e2b1c9b93aad0ca0d774c6f4f9f490/0_0_401_401/master/401.jpg?width=140&quality=85&auto=format&fit=max&s=c12ecd1d0d116660f3d10af82c6577b7',
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/9/7/5/9200000093205798.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Bad_vibes_forever_xxxtentacion.jpg/220px-Bad_vibes_forever_xxxtentacion.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Xxxtentacion_mugshot.jpg/266px-Xxxtentacion_mugshot.jpg',
    'https://media.cdr.nl/COVER/MEDIUM/FRONT/JK121302/Try-this.jpg'
];

const allSon = document.getElementById('song');

function uploadimg(url) {
    let Foto = document.createElement('div');
    Foto.className = 'imgdiv';
    let mainFoto = document.createElement('img');
    mainFoto.src = url;
    mainFoto.alt = 'Image loading';
    Foto.append(mainFoto);
    allSon.append(Foto);
}

for(let i=Images.length; i>0; i--) {
    let Number = Math.floor(Math.random()*Images.length)
    uploadimg(Images[Number]);
    Images.splice(Number,1);
}