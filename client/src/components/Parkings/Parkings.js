import React from 'react'
import style from './Parkings.module.css'
import noImage from '../../img/noImage.png'

const Parkings = ({businesses}) => {
    return (
        <div className={style.container} >
            {
                businesses && (<div >
                    {
                        businesses.map(n => (<div key={n.id} className={style.card} >
                            <div>
                                {
                                    n.image_url ? <img src={n.image_url} className={style.img} alt="" /> : <img src={noImage} className={style.img} alt="" />
                                }
                            </div>
                            <div className={style.textContainer} >
                                <div className={style.title} >
                                    <h2>{n.name}</h2>
                                </div>
                                <div>
                                    <h4>Address: {n.location.display_address.join(", ")}</h4>
                                    <h4>Rating: {n.rating} </h4>
                                    <h4>Reviews: {n.review_count} </h4>
                                    <h4><a href={n.url} target="_blank" rel="noreferrer" >Visit Yelp page</a></h4>
                                    <h4>Score: {Math.round((n.review_count * n.rating) / (n.review_count + 1) * 100) / 100} </h4>
                                </div>
                            </div>
                        </div>))
                    }
                </div>)
            }
        </div>
    )
}

export default Parkings