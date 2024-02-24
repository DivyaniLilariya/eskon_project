
const getRandomImage = (): string => {
  const imageFileNames = ['image1.avif', 'image2.jpg','image3.webp' ,'image4.jpg' ];
  const randomImageFileName = imageFileNames[Math.floor(Math.random() * imageFileNames.length)];
  const randomImageUrl = `/images/${randomImageFileName}`;
  return randomImageUrl;
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
