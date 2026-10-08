interface iNavbarCategoriesProps {
    id: string;
    nameBn: string;
    slug: string;
    icon: string;
}

const NavbarCategories = async () => {

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', { cache: 'force-cache' });
    const data = await res.json()

    return (
        <div className="border-b border-[#E1E8E1] bg-[#FAFCFA] shadow-xl/2 py-2 md:py-3 overflow-x-auto scrollbar-hide">
            <div className="container mx-auto grid grid-cols-4 place-items-center md:flex gap-1 md:gap-2 md:pl-4.25">
                {
                    data.map((category: iNavbarCategoriesProps) => {
                        return <div key={category.id} >
                            <button className='flex items-center gap-0.5 text-[#1D271F] text-[15px] md:text-[16px] font-semibold md:btn 
                            border-none bg-[#FAFCFA] hover:bg-gray-200 active:bg-gray-300 rounded-[10px] py-2 px-1.5 md:py-3 md:px-3'>
                                <span className="emoji-icon">{category.icon}</span>
                                <span>{category.nameBn} </span>
                            </button>

                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default NavbarCategories;