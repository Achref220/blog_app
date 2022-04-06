import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as RiIcons from "react-icons/ri";


export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    toast.configure()
    const notify1 = () => toast.success("Form sent successfully to our team", { autoClose: 8000 });
    
    const form = useRef();
    
    const sendEmail = (e) => {

    emailjs.sendForm('service_n6uoi14', 'template_bj71mhd', form.current, 'user_cXrxoulOrzG3kAmHG1Txm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        notify1()
    };
    
    return (
        <div className='contact-container'>
            <h1 className='title'>Get in touch</h1>
            <div className='container'>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} >
                    <ToastContainer />
                    <div className='contact-form row'>
                    <div className='form-field col-lg-6'>
                        <input id='name' className='input-text' type="text" name='from_name' {...register("name", { required: true, maxLength: 25 })} />
                        <label htmlFor="name" className='label'>full name</label>
                        {errors.name && errors.name.type === "required" && <p><RiIcons.RiErrorWarningLine />&#160; Name feild is required</p>}
                        {errors.name && errors.name.type === "maxLength" && <p>*Max length exceeded*</p> }
                    </div>
                    <div className='form-field col-lg-6'>
                            <input id='email' placeholder='example@gmail.com' className='input-text' type="email" name='email' {...register("email", { required: true })}/>
                        <label htmlFor="email" className='label'>email</label>
                            {errors.email && <p><RiIcons.RiErrorWarningLine />&#160; Please check the email</p>} 
                    </div>
                    <div className='form-field col-lg-6'>
                        <input id='company' className='input-text' type="text" name='companyname' {...register("companyName", { required: true, maxLength: 30 })}/>
                            <label htmlFor="company" className='label'>company name</label>
                            {errors.companyName && errors.companyName.type === "required" && <p><RiIcons.RiErrorWarningLine />&#160; The company name field is required</p>} 
                    </div>
                    <div className='form-field col-lg-6'>
                        <input id='phone' placeholder='(+216)' className='input-text' type="text" name='phone' {...register("contactNumber", { required: true, maxLength: 8 })}/>
                            <label htmlFor="phone" className='label'>contact number</label>
                            {errors.contactNumber && <p><RiIcons.RiErrorWarningLine />&#160; Please check the contact number</p>} 
                    </div>
                    <div className='form-field col-lg-6'>
                        <input id='message' className='input-text' type="text" name='message' {...register("message", { required: true })}/>
                            <label htmlFor="message" className='label'>message</label>
                            {errors.message && <p><RiIcons.RiErrorWarningLine />&#160; The message field is required</p>}
                    </div>
                    <div className='form-field col-lg-12'>
                            <input className='submit-btn' type="submit" value="Send" />
                    </div>
                </div>
                </form>
            </div>
            <p>(For business inquiries only !!!)</p>
        </div>
    )
}