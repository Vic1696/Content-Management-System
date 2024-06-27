import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContent, updateContent} from '../services/api';

const EditContent = () => {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        title: '',
        body: '',
    });

    useEffect(() =>{
        const fetchContent = async () => {
            try {
                const response = await getContent(id);
                setFormData (response.data);
            } catch (error){
                alert('Error fetching content');
            }
        };
        fetchContent();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            await updateContent(id, formData);
            alert ('Content update successfully');
        } catch (error) {
            alert ('Error updating content');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        value={formData.body}
        onChange={handleChange}
        placeholder="Body"
      />
      <button type="submit">Update Content</button>
    </form>
  );
};

export default EditContent; 