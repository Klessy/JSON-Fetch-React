import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [testimonials]);

  return (
    <div className="container">
      <Title classes={"title text-center"} title={"Testimonials"}/>
      <div className="btn-con pl-2">
        <Button 
            icon={ <BsFillFileEarmarkPostFill /> }
            btnClass={"btn-info"} 
            btnTitle={"Posts"} 
            onClick={() => setTestimonials("Posts")} 
        />
        <Button
            icon={ <FaUserAlt /> } 
            btnClass={"btn-info"} 
            btnTitle={"Users"}  
            onClick={() => setTestimonials("Users")} 
        />
        <Button
            icon={ <BiCommentDetail />} 
            btnClass={"btn-info"} 
            btnTitle={"Comments"}  
            onClick={() => setTestimonials("Comments")} 
        />
      </div>
      <Title classes={"subtitle text-primary pl-2"} title={!testimonials ? "Select from above" : testimonials}/>
      <div className="grid-template">
        { !items ? null : items.map((item) => {
            return (
                    <div className="card" key={item.id}>
                        { item.name && <h1 className="card-header">{item.name}</h1>}
                        <div className="card-body">
                           <h4>{item.title}</h4>
                           <p>{item.body}</p>
                        </div>
                        <div className="card-footer">
                            { item.email && <small>{item.email}</small>}
                        </div>
                    </div>
            )
        })}
        </div>
    </div>
  )
}

export default Testimonials
