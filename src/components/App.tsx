import {IconProp, library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react";
import "./App.scss";
import Contacts from "./Contacts";
import NameTitle from "./NameTitle";
import Photo from "./Photo";
import Skills from "./Skills";

library.add(fab, far, faMapMarkerAlt, faPhone);

class App extends Component {

    public componentDidMount() {
        document.title = `CV - ${document.title}`;
    }

    public render() {
        const contacts = [
            {title: "Kyiv, Ukraine", icon: ["fas", "map-marker-alt"] as IconProp},
            {title: "const@nazarenko.es", icon: ["far", "envelope"] as IconProp, href: "mailto:const@nazarenko.es"},
            {
                href: "https://t.me/const_nazarenko",
                icon: ["fab", "telegram-plane"] as IconProp,
                title: "const_nazarenko",
            },
            {title: "+380 68 197-84-47", icon: ["fas", "phone"] as IconProp},
            {title: "github", icon: ["fab", "github"] as IconProp, href: "https://github.com/constnazarenko/"},
            {
                href: "https://github.com/constnazarenko/constnazarenko.github.io/tree/develop",
                icon: ["fab", "git"] as IconProp,
                title: "code example (this very cv)",
            },
            {title: "instagram", icon: ["fab", "instagram"] as IconProp, href: "https://instagram.com/const.nazarenko"},
            {title: "facebook", icon: ["fab", "facebook"] as IconProp, href: "https://facebook.com/const.nazarenko"},
            {title: "I just love icons and list =)", icon: ["far", "heart"] as IconProp},
        ];

        const skills = [
            {title: "I just love icons and list =)", rating: 8, type: "frontend"},
        ];

        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        <Photo src="/images/face.jpg"/>
                        <NameTitle name="Constantine Nazárenko" title="Senior Software Engineer"/>
                        <Contacts contacts={contacts}/>
                        <Skills skills={skills}/>
                    </div>
                    <div>
                        <header>
                            <h2>{"Testing changes! Yey! It works!"}</h2>
                        </header>
                        <p>Some text here</p>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
