'use client'; 

import {useRouter} from 'next/navigation';

export default function BackButton() {
    
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="font-playfair text-4xl italic cursor-pointer hover:opacity-70 transition"
            aria-label="Go back"
            aria-hidden="true"
            >
            ←
        </button>
    );

}