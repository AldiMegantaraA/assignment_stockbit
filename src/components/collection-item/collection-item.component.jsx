import React from 'react';
import CollectionPreview from '../preview-collection/collection-preview.component'

import './collection-item.styles.scss';

function CollectionItem({carCart}) {
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${carCart.Poster})`}} />
            <div className='collection-footer'>
                <span className='name'>{carCart.Title}</span>
                <span className='price'>{carCart.Year}</span>
            </div>
        </div>
    )
};

export default CollectionItem;