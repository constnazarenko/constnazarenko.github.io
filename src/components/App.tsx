import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import "./App.scss";
import Contacts from "./Contacts";
import NameTitle from "./NameTitle";
import Photo from "./Photo";

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
        ];

        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        <Photo src="/images/face.jpg"/>
                        <NameTitle name="Constantine Nazárenko" title="Senior Software Engineer"/>
                        <Contacts contacts={contacts}/>
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
