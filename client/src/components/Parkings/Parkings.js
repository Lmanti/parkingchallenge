import React from 'react'
import style from './Parkings.module.css'
import noImage from '../../img/noImage.png'

const Parkings = ({businesses}) => {

    businesses.sort((a, b) => a.rating - b.rating)

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
                                <div className={style.innerTextContainer} >
                                    <h4>Address: {n.location.display_address.join(", ")}</h4>
                                    <div>
                                        <label name="1" className={ n.rating >= 1 ? `${style.star} ${style.starSelected}` : style.star} >★</label>
                                        <label name="2" className={ n.rating >= 2 ? `${style.star} ${style.starSelected}` : style.star} >★</label>
                                        <label name="3" className={ n.rating >= 3 ? `${style.star} ${style.starSelected}` : style.star} >★</label>
                                        <label name="4" className={ n.rating >= 4 ? `${style.star} ${style.starSelected}` : style.star} >★</label>
                                        <label name="5" className={ n.rating === 5 ? `${style.star} ${style.starSelected}` : style.star} >★</label>
                                    </div>
                                    <h4>Reviews: {n.review_count} </h4>
                                    <h4><a href={n.url} target="_blank" rel="noreferrer" className={style.link} >Visit Yelp page</a></h4>
                                    <h4 className={style.score} >Score: {Math.round((n.review_count * n.rating) / (n.review_count + 1) * 100) / 100} </h4>
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