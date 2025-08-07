'use client';
import React, { useState } from 'react';
import cn from 'classnames';

interface InputProps {
    title: string,
    type: string,
    value: string,
    onChange: () => void
}

export default function Input({ title, type, value, onChange }: InputProps) {

    const handleInputChange = (e) => {
        onChange(e.target.value)
    }

    const inputClasses = cn("border-2 border-indigo-100/75 rounded-[8px] focus:outline-hidden focus-visible:border-[#3B3B93] h-[48px] w-[400px] pl-[20px] pr-[20px]");
    const titleClass = "text-2xl mb-[8px]";
    return <div className="font-[family-name:var(--font-molengo)] text-[#3B3B93]">
        {type !== "textarea" && <div>
            <div className={titleClass}>{title}</div>
            <input type={type} className={inputClasses} onChange={handleInputChange} value={value}></input>
        </div>
        }
        {type === "textarea" && <div>
            <div className={titleClass}>{title}</div>
            <textarea className={cn(inputClasses, "h-[200px] pt-[12px] pb-[12px]")} onChange={handleInputChange} value={value}></textarea>
        </div>
        }
    </div>
}