import React, {useState} from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import ReactCircleModal from 'react-circle-modal'
import CustomButton from '../custom-button/custom-button.component';


function CollectionPreview({carCart}) {
    // console.log(carCart)
    const [qty, setQty] = useState(carCart.quantity)
    function handleChange(e) {
        setQty(e.target.value)
    }
    return (
        <div className='collection-preview'>
            <ReactCircleModal 
                    toogleComponent={onClick => (
                        <button onClick={onClick} style={{background:'none', border:'none'}}>
                        <img className='image' src={carCart.Poster} alt="" />
                        </button>
                    )}
                    offsetX={0}
                    offsetY={0}
                    >
                    {(onClick) => (
                        <div style={{alignItems:'center', justifyContent:'space-between', display: 'flex', flexDirection: 'column'}}>
                            <img src={carCart.Poster} style={{width: '24rem', height: 'auto', margin: '20px'}} alt="" />
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <CustomButton>
                                    Watch Now
                                </CustomButton>
                                <CustomButton onClick={onClick}>
                                    Close
                                </CustomButton>
                            </div>
                        </div>
                    )}
                </ReactCircleModal>
            <div className='card-movie'>
                <div className='year'>{carCart.Year} <span className='id'>ImdbID : {carCart.imdbID}</span></div>
                <div className='title'>{carCart.Title}</div>
            </div>
            <div className='content'>
                <span className='subtitle'>WATCH NOW</span>
            </div>
        </div>
    )
};

export default CollectionPreview;