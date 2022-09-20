import React from 'react';
import team from "../img/sponsors/team.jpg";

const Testimony = () => {
    return (
        <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente molestiae earum tempore a sequi blanditiis corporis voluptates nisi vero.</p>
            <div className="team">
                <div className="img"><img src={team} alt="" /></div>
                <div className="text">
                    <span>Russell Lee</span>
                    <p>Editor</p>
                </div>
            </div>
        </section>
    )
}

export default Testimony;