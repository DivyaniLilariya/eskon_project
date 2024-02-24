
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';


const Home = () => {
  return (
 
    <nav className="w-full py-5 dark:bg-white">
    <div className="wrapper flex items-center justify-between">
      <Link href={"/services"} className="flex-1">
        <div className=" items-center">
          <button className="  dark:text-dark">
            Product
          </button>
          
        </div>
      </Link>
      <Link href={"/details"}>
        <div className=" items-center">
          <button className="  dark:text-dark">
            Details
          </button>
          
        </div>
      </Link>

     
      <div className="flex-1 justify-end flex gap-3 items-center">
        <ThemeToggle />
        
      </div>
    </div>
  </nav>
  );
};

export default Home;
