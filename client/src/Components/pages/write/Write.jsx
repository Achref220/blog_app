import React, { useContext, useState } from 'react'
import './Write.css';
import axios from "axios";
import { Context } from '../../../context/Context';
import { toast } from 'react-toastify';


const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.photo = fileName;
            try {
                await axios.post("http://localhost:54188/upload", data)
            } catch (err) {
                console.log(err);
            };
            try {
              const res = await axios.post("http://localhost:54188/posts", newPost)
              window.location.replace("/post/" + res.data._id)
              toast.success('Post has been added')
            } catch (err) {
                console.log(err);
                toast.error("Something went wrong !!! try to make your content unique")
            }

        }
    }
  return (
    <div className='write'>
        {file && (
             <img className='writeImg' src={URL.createObjectURL(file)} alt="img54" />
        )
        }
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} onChange={e => setFile(e.target.files[0])} required={true}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} required={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={e => setDesc(e.target.value)}></textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write