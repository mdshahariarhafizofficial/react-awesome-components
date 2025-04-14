import React, { useState } from 'react';
import { Logs, X } from 'lucide-react';

const navMenu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  

const Navbar = () => {
    const menu = navMenu.map(item => <li key={item.id} className='text-center lg:text-left px-8 py-3 lg:p-0 hover:bg-black lg:hover:bg-white'><a href={item.path}>{item.name}</a></li>);

    const [open, setOpen] = useState(false);

    const handleMenu = ()=>{
        setOpen(!open)
    }

    return (
        <nav className='flex items-center justify-between py-4 lg:px-10'>
            <div className='logo flex items-center gap-4'>
                <div>
                    <button onClick={handleMenu} className='lg:hidden cursor-pointer'>
                        {
                            
                            open?<X color="#fe2020" size={50} strokeWidth={2} />:<Logs color='red' size={50} strokeWidth={2} />
                        }    
                    </button>
                    <ul className={`bg-red-500 lg:hidden text-white flex flex-col gap-3 absolute
                        ${open ? 'mt-0': '-mt-96'} duration-1000` }>
                            {
                                menu
                            }
                    </ul>
                </div>

                <img className='w-[250px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV9kumOddkb7wTQCXz2B30L0ng0QxWYenoBt9_1wP_z-s4PKpWzLMwyV-z25AvHXm6Q&usqp=CAU" alt="" />
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-6 text-black text-xl font-medium '>
                    {
                        menu
                    }
                </ul>
            </div>
            <div className=''>
                <a className="btn bg-red-600 text-white">Button</a>
            </div>
        </nav>
    );
};

export default Navbar;<h1>Nax</h1>