import React from 'react'

const Parkings = ({businesses}) => {
    return (
        <div>
            {
                businesses && (<div>
                    {
                        businesses.map(n => (<div key={n.id} >
                            <h3>{n.name}</h3>
                            <img src={n.image_url} width="150px" alt="" />
                            <h4>Address: {n.location.display_address.join(", ")}</h4>
                            <h4>Rating: {n.rating} </h4>
                            <h4>Reviews: {n.review_count} </h4>
                            <h4>Link to Yelp: <a href={n.url} target="_blank" >Visit Yelp page</a></h4>
                            <h4>Score: {Math.round((n.review_count * n.rating) / (n.review_count + 1) * 100) / 100} </h4>
                        </div>))
                    }
                </div>)
            }
        </div>
    )
}

export default Parkings