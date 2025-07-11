 'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import logo from '../../../public/gallery/logo.png'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { AuthContext } from '@/context/AuthProvider'
import Swal from 'sweetalert2'

export const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const router = useRouter()
    const pathname = usePathname()
    const [menuOpen,setMenuOpen] = useState(false)

      const handleLogout = () => {
        logOut()
        .then(()=> {
             Swal.fire({
                        icon:"success",
                        title: "Logout Successfull",
                        showConfirmButton:false,
                        timer:1500
                       })
        })
        .catch((error)=> {
            console.error('logout error',error);
            
        })
      }

    const isActive = (path:string) => {
    return pathname === path? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
    }

    const toggleMenu = () => {
       setMenuOpen(!menuOpen)
    }
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-5 px-10 bg-white shadow-md '>
        <div className='flex items-center gap-2'>
            <Image src={logo} alt='logo' width={40} height={40}/>
            <h1 className='font-bold text-xl'>Nippon-BD <span className='text-blue-600'>Connect</span></h1>
        </div>
        <ul className='hidden  md:flex gap-6 text-gray-700 font-semibold font-sans tracking-widest'>
            <li><Link className={isActive('/')} href="/">Home</Link></li>
            <li><Link className={isActive('/culture')} href="/culture">Culture</Link></li>
            <li><Link className={isActive('/technology')} href="/technology">Tecnology</Link></li>
            <li><Link className={isActive('/education')} href="/education">Education</Link></li>
            <li><Link className={isActive('/remote-jobs')} href="/remote-jobs">Remote Jobs</Link></li>
            <li><Link className={isActive('/contact')} href="/contact">Contact</Link></li>
        </ul>

       {/* Login / Logout & User Display */}
<div className="hidden md:flex items-center gap-3">
  {user ? (
    <>
      <span className="text-gray-800 font-semibold">{user.displayName || user.email}</span>
      <button
        onClick={handleLogout}
        className="bg-blue-600 cursor-pointer text-white px-4 py-1 rounded hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </>
  ) : (
    <Link href="/login">
      <button className="bg-blue-600 cursor-pointer text-white px-4 py-1 rounded hover:bg-blue-500 transition">
        Login
      </button>
    </Link>
  )}
</div>

        {/* mobile menu icon */}
        <div className='md:hidden '>
            <button onClick={toggleMenu}> <FiMenu className='text-blue-600 text-5xl font-bold cursor-pointer' size={24}/></button>
        </div>

        
            {menuOpen && (
                <div className='absolute  shadow-md right-2 top-16  flex items-center justify-center px-4 py-3 z-50 bg-blue-50 w-44 md:hidden'>
                    <div className='flex justify-end text-3xl font-extrabold  mb-2'>
                        <button onClick={toggleMenu} className='text-2xl font-bold'> <FiX className= 'absolute top-3 right-3 font-bold text-4xl cursor-pointer' size={24} /></button>
                    </div>
            <ul className='mt-2 flex flex-col gap-3  text-gray-700 font-semibold font-sans tracking-widest md:hidden'>
            <li><Link className={isActive('/')} href="/">Home</Link></li>
            <li><Link className={isActive('/culture')} href="/culture">Culture</Link></li>
            <li><Link className={isActive('/technology')} href="/technology">Tecnology</Link></li>
            <li><Link className={isActive('/education')} href="/education">Education</Link></li>
            <li><Link className={isActive('/remote-jobs')} href="/remote-jobs">Remote Jobs</Link></li>
            <li><Link className={isActive('/contact')} href="/contact">Contact</Link></li>
        </ul>
        </div>
        )}
        
    </nav>
  )
}
