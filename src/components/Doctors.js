import React from "react";
import Doctor from "./Doctor";

function Doctors() {

    const doctorData = [
        {
        img: "../assets/img/doctors/doctors-1.jpg",
        name: "Daimy Smith",
        designation: "Chief Medical Officer",
        description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac."
        },
        {
        img: "../assets/img/doctors/doctors-2.jpg",
        name: "John White",
        designation: "Chief Medical Officer",
        description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac."
        },
        {img: "../assets/img/doctors/doctors-3.jpg",
        name: "Umika Loha",
        designation: "Chief Medical Officer",
        description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac."
        },
        {img: "../assets/img/doctors/doctors-4.jpg",
        name: "Daimy Smith",
        designation: "Neurosurgeon",
        description: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus."
        }
    ]
    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                </div>
                <div className="row">
                    {
                        doctorData.map((d) =>{
                            return <Doctor name={d.name} des={d.description} img={d.img} designation= {d.designation}/>
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default Doctors;