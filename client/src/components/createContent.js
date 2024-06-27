import React, { useState } from 'react';
import { createContent } from '../services/api';

const CreateContentComponent = () => {
    const [formData, setFormData] = useState ({
        title: '',
        body: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContent(formData);
            alert('Content created successfully');
        } catch (error) {
            alert('Error creating content');
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
          <button type="submit">Create Content</button>
        </form>
      );
}

export default CreateContentComponent;
