import React, { memo } from 'react';
import PropTypes from 'prop-types';

function PostItem({ id, heading, content, tags, onRemove }) {
  const handleRemove = () => onRemove(id);

  return (
    <div className="post-item">
      <h3>{heading}</h3>
      <p>{content}</p>
      {tags.length && (
        <div className="tags">
          {tags.map((tag, index) => (
            <button key={index} className="btn btn-xs btn-default">
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="controls">
        <button className="btn btn-danger btn-mini" onClick={handleRemove}>Удалить</button>
      </div>
    </div>
  );
}

const EnhancedPostItem = memo(PostItem);

EnhancedPostItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
};

export default EnhancedPostItem;
