import React, {useState} from 'react';
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";

const Faq = () => {
    const [clicked, setClicked] = useState(false);

    const click = () =>{
        setClicked(!clicked);
    }

    return (
        <section className={`${clicked && 'active'}`} onClick={!clicked ? click : undefined}>
            <div className="ico" onClick={click}>
                {!clicked && <img src={plus} alt="" />}
                {clicked && <img src={minus} alt="" />}
            </div>
            <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, dolor! Veritatis est rem id fugiat, possimus, ex voluptate voluptates molestiae inventore ducimus sequi cumque nesciunt quia enim debitis in ut ab, blanditiis quis. Debitis ipsam ipsum expedita odio voluptatum quia, esse porro corrupti eius nulla libero eaque unde magni optio!</p>
            </div>
        </section>
    )
}

export default Faq;