
const images = [
  
  
  'https://www.blackhillsinfosec.com/wp-content/uploads/2016/07/66619265.jpg',
  'https://pbs.twimg.com/media/ER3cOugVAAIxavx?format=png&name=900x900',
  'http://www.quickmeme.com/img/bd/bdb7ac37e00ff92776d0dead5171743db339c34a1f4f4c7293b3bde5ca960c79.jpg',
  'http://www.quickmeme.com/img/eb/ebea0fc81dc1ac19db1eae42aee94d61dc09b934a53f94c7502f0ec4969457ed.jpg'

];


const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const RandomImage = () => {
  
  const randomImageUrl = getRandomImage();

  return (
    <div>
      <img style={{height:"400px",width:"400px",marginLeft:"500px",marginTop:"50px"}} key={randomImageUrl} src={randomImageUrl} alt="Random Image" />
    </div>
  );
};



export default RandomImage;
