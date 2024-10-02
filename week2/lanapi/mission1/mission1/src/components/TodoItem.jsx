import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: 'white',
      borderRadius: '4px',
      marginBottom: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '10px' }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{
            flex: 1,
            padding: '5px',
            marginRight: '10px',
            fontSize: '16px',
            border: '1px solid #2196F3',
            borderRadius: '4px'
          }}
        />
      ) : (
        <span style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#333'
        }}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleEdit}
          style={{
            padding: '5px 10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '5px'
          }}
        >
          저장
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            padding: '5px 10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '5px'
          }}
        >
          수정
        </button>
      )}
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;