import Link from "next/link";


interface BreadcrumbProps {
    categoryNameBn: string;
    nameBn: string;
    category: string;
}

const Breadcrumb = ({categoryNameBn, nameBn, category}: BreadcrumbProps)  => {



    return (
        <nav className="flex items-center gap-2 text-sm text-[#1D271F]/70 px-5 xl:px-0 py-4 mt-2 md:mt-5 container mx-auto">
            {/* Home Link */}
            <Link href="/" className="hover:text-[#05893E] transition-colors">
                হোম
            </Link>

            <span>&gt;</span>

            {/* Category Link */}
            <Link
                href={`/categories/${category}`}
                className="hover:text-[#05893E] transition-colors"
            >
                {categoryNameBn}
            </Link>

            <span>&gt;</span>

            {/* Current Product Name) */}
            <span className="font-semibold text-[#1D271F] truncate">
                {nameBn}
            </span>
        </nav>
    );
};

export default Breadcrumb;