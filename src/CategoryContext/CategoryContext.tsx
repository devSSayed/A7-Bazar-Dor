'use client';

import { iProductsType } from '@/Components/Types/ProductsTypes';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface iProviderProps {
    children: ReactNode;
}

interface iSharedDatas{
    sortBy: 'ডিফল্ট' | 'দাম: বেশি থেকে কম' | 'দাম: কম থেকে বেশি'
    setSortBy: Dispatch<SetStateAction<'ডিফল্ট' | 'দাম: বেশি থেকে কম' | 'দাম: কম থেকে বেশি'>>
}


export const categoryContext = createContext({} as iSharedDatas)


const CategoryContextProvider = ({ children }: iProviderProps) => {


    const [sortBy, setSortBy] = useState<'ডিফল্ট' | 'দাম: বেশি থেকে কম' | 'দাম: কম থেকে বেশি'>('ডিফল্ট')

    const sharedDatas:iSharedDatas = {
        sortBy,
        setSortBy
    }

    return (
       <categoryContext.Provider value={sharedDatas}>{children}</categoryContext.Provider>

    );
};

export default CategoryContextProvider;