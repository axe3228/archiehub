'use client';

import { useState } from "react";
import Image from "next/image";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setStatus('Sending please wait. . .');
    
        // Example of form submission handling
        try {
          const response = await fetch('https://archiehub.vercel.app/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: formData.email,
              subject: formData.subject,
              text: formData.message,
              name: formData.name,
              html: formData.message,
            }),
          });
    
          if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            setStatus('Failed to send the message.');
          }
        } catch (error) {
          setStatus('An error occurred.');
        }
    };

    return (
    <div className="flex md:flex-row flex-col justify-center px-6 pt-8 pb-10">
      <div className="flex flex-col justify-center md:items-start items-center space-y-6 px-6 max-w-[640px]">
        <h1 className="md:text-[42px] text-[32px] font-bold md:text-left text-center">Let&#39;s chat. <br /> Tell me about your project.</h1>
        <p className="font-montez md:text-[32px] text-[24px] md:text-left text-center">Let&#39;s create something together</p>
        <div className="flex md:flex-row flex-col items-center bg-crystal-white rounded px-6 py-3 mt-6">
          <div className="bg-white rounded-full p-2 md:mb-0 mb-2">
            <Image
              src={"/icons/mail.png"}
              alt={"Mail Icon"}
              width={20}
              height={20}
            />
          </div>
          <p className="md:ml-2.5 md:text-left text-center">mail me at 
            <span className="block text-primary">archiehabradas3228@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="border border-white/[0.17] py-10 px-8 md:w-[400px] w-full rounded-2xl bg-white/[0.08]
      md:mt-0 mt-10">
        <form onSubmit={handleSubmit} 
        className="flex flex-col space-y-6 mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="text-black px-2 p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="text-black px-2 p-2 rounded"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="text-black px-2 p-2 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Message"
            className="text-black px-2 p-2 rounded"
          />
          <button type="submit" className="bg-white text-black p-3 font-bold hover:bg-primary hover:text-white">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
    );
}
 
export default Contact;