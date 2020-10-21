import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
const { id, description, thumb_image_url, logo} = props.item;
    return (
        <div>  
        <div> {description} </div>
        <img src={thumb_image_url} alt="thumb"/>
        <img src={logo} alt="logo"/>
        <Link to ={`/portfolio/${id}`}>See more</Link>
        </div>
    )
}