import React, { useState } from 'react';
import uuid from 'uuid';
import './style.css';

export default function index() {

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const handleOnChange = (e) => {
        setNewTag(e.target.value);
    }

    const renderTag = (tag) => {
        return <span key={tag.id}
            className="tag-input-container__single-tag"
            style={{ backgroundColor: 'rgba(0,0,0,0.1)', border: '1px solid #888', color: '#555', borderRadius: '3px', padding: '3px', margin: '2px 3px' }}>
            {tag.name}
            <span className="tag-input-container__tag-btn--delete" onClick={() => handleOnDelete(tag.id)} style={{ cursor: 'pointer', marginLeft: '3px' }}>&times;</span>
        </span>
    }
    const handleOnAddTag = () => {
        const name = newTag;
        if (name.trim() !== '') {
            setTags([...tags, { name, id: uuid() }])
            setNewTag('');
        }
    }
    const handleOnDelete = (id) => {
        setTags([...tags.filter(tag => tag.id !== id)]);
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
                <div className="">
                    <button
                        onClick={handleOnAddTag}
                        type="button"
                        className="tag-input-container__btn-add"
                        style={{
                            margin: '5px auto',
                            minWidth: '40px',
                            width: '200px',
                            textAlign: 'center',
                            padding: '5px 0px',
                            position: 'relative',
                            border: '1px solid #00c45a',
                            color: '#00c45a',
                            outline: 'none'
                        }}>
                        Add new tag <i className="fas fa-plus"></i>
                    </button>

                </div>
            </div>
        </React.Fragment>
    )
}
