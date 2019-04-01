import React, { useState } from 'react';
import uuid from 'uuid';
import './style.css';

export default function index({ setTagsToState, tags = [] }) {

    // const [tags, setTags] = useState(initialTags);
    const [newTag, setNewTag] = useState('');

    const handleOnChange = (e) => {
        setNewTag(e.target.value);
    }

    const renderTag = (tag) => {
        return <span key={tag.id}
            className="tag-input-container__single-tag">
            {tag.name}
            <span className="tag-input-container__tag-btn--delete" onClick={() => handleOnDelete(tag.id)} style={{ cursor: 'pointer', marginLeft: '3px' }}>&times;</span>
        </span>
    }
    const handleOnAddTag = () => {
        const name = newTag;
        if (name.trim() !== '') {
            const newTags = [...tags, { name, id: uuid() }];
            // setTags(newTags)
            setNewTag('');
            setTagsToState(newTags);

        }
    }
    const handleOnDelete = (id) => {
        const newTags = [...tags.filter(tag => tag.id !== id)]
        // setTags(newTags);
        setTagsToState(newTags);
    }
    return (
        <React.Fragment>
            <label htmlFor="input-tag">Tags</label>
            <div id="input-tag" className="tag-input-container">
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        tags.map(renderTag)
                    }
                    <input
                        value={newTag}
                        onChange={handleOnChange}
                        placeholder="Enter tag..."
                        className="tag-input-container__input"
                        type="text" />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={handleOnAddTag}
                        type="button"
                        className="tag-input-container__btn-add"
                    >
                        Add new tag <i className="fas fa-plus"></i>
                    </button>

                </div>
            </div>
        </React.Fragment>
    )
}
