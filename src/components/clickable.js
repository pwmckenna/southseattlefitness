import React from 'react';

export default ({ style, ...props }) => (
    <button
        {...props}
        style={{
            background: 'none',
            color: 'inherit',
            border: 'none',
            padding: 0,
            font: 'inherit',
            cursor: 'pointer',
            fontWeight: 'bold',
            textDecoration: 'none',
            outline: 'none',
            ...style
        }}
    />
);
