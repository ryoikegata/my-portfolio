import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {

    return (
        <>
        <div className='flex justify-center items-center h-full'>
        <div className='flex justify-center w-3/4 h-full items-center z-10'>
        <div className='flex justify-center items-center'>
            <h1 className="text-8xl text-white" >RYO IKEGATA</h1>
        </div>
        <div className='flex w-5/6 justify-end h-full items-center mx-auto gap-20'>
            <div>
                <Link href="/production">
                    <div  className='text-white border-4 w-40 flex  border-white py-4 justify-center  rounded-full hover:text-black hover:bg-white'>
                production
                </div>
                </Link>
            </div>
            <div>
            <Link  href="/about">
            <div  className='text-white border-4 w-40 border-white py-4 flex justify-center rounded-full hover:text-black hover:bg-white'>
                about
                </div>
                </Link>
            </div>
        </div>
        </div>
        </div>
        <div className='absolute flex justify-center gap-20 w-full  bottom-5 text-white '>
            <a href=""><FontAwesomeIcon icon={faGithub} className='w-10 h-10 hover:w-16 hover:h-16' /></a>

        <a href=""><FontAwesomeIcon icon={faInstagram} className='w-10 h-10' /></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} className='w-10 h-10' /></a>
        </div>
        </>
    );
}

export default Nav;