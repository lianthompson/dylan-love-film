'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Input from "../input";

interface ContactFormData {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function Contact() {

    const [data, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (type, e) => {
        setFormData(prev => ({ ...prev, [type]: e}));
    }

    const handleSubmit = () => {
        setFormData({
            'name': '',
            'email': '',
            'subject': '',
            'message': ''
        });
    }

    return (
        <div className="flex justify-end items-start m-auto font-[family-name:var(--font-molengo)] text-[#3B3B93] gap-[40px] pt-[32px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex w-[400px] text-[20px]">Dylan Love is a Director of Photography based out of San Francisco, California. He specializes in Steadicam, bringing a unique perspective and fluidity to all his work. With a passion for storytelling, Dylan works closely with clients to capture their vision and bring it to life on screen.
                </div>
                <Image alt="steadicam" src={"/LFCQ6846.JPG"} height={400} width={400} />
            </div>
            <div className="flex flex-col gap-[20px]">
                <Input title={"Name"} type={"text"} onChange={(e) => handleInputChange('name', e)} value={data.name}></Input>
                <Input title={"Email"} type={"email"} onChange={(e) => handleInputChange('email', e)} value={data.email}></Input>
                <Input title={"Subject"} type={"text"} onChange={(e) => handleInputChange('subject', e)} value={data.subject}></Input>
                <Input title={"Message"} type={"textarea"} onChange={(e) => handleInputChange('message', e)} value={data.message}></Input>
                <button className="bg-[#6969E4] hover:bg-indigo-700 text-white font-bold py-2 px-4 w-[90px] rounded-full cursor-pointer" onClick={handleSubmit}>Submit</button>
            </div>
            {/* <div className="text-3xl">+1 415 342 2582</div> */}
        </div>
    );
}