'use client';
import React, { useState } from 'react';
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
        <div className="flex flex-col justify-end justify-center m-auto font-[family-name:var(--font-molengo)] text-[#3B3B93] gap-[20px]">
            <Input title={"Name"} type={"text"} onChange={(e) => handleInputChange('name', e)} value={data.name}></Input>
            <Input title={"Email"} type={"email"} onChange={(e) => handleInputChange('email', e)} value={data.email}></Input>
            <Input title={"Subject"} type={"text"} onChange={(e) => handleInputChange('subject', e)} value={data.subject}></Input>
            <Input title={"Message"} type={"textarea"} onChange={(e) => handleInputChange('message', e)} value={data.message}></Input>
            <button onClick={handleSubmit}>Submit</button>
            <div className="text-3xl">+1 415 342 2582</div>
        </div>
    );
}