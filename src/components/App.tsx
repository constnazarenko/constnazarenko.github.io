import {IconProp, library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react";
import "./App.scss";
import Contacts from "./Contacts";
import NameTitle from "./NameTitle";
import Photo from "./Photo";
import Positions from "./Positions";
import Skills, { Skill } from "./Skills";

library.add(fab, far, faMapMarkerAlt, faPhone);

interface AppProps {
    skills: Skill[];
}

class App extends Component<AppProps> {

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

        const positions = [
            {company: 'Qvantel', description: 'My responsibilities are refactoring of legacy code, translating old parts of code to TypeScript and implementing new features to improve the product.\n' +
                    'Quality is ensured with unit tests applying Jest and Enzyme.\n' +
                    'The product is a complex solution for global telecommunication providers and their customers.', end: null, start: '2018.03', title: 'Senior frontend developer'},
            {company: 'How Far Games (GSEG)', description: 'Among my responsibilities were implementation of a new functionality of the web-based gaming application written on React and Python.', end: '2017.08', start: '2017.02', title: 'Senior full-stack developer'}
        ];
        const education = [
            {company: 'University', description: 'en on React and Python.', end: '2000', start: '2004', title: 'Senior full-stack developer'}
        ];

        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        <Photo src="/images/face.jpg"/>
                        <NameTitle name="Constantine Nazárenko" title="Senior Software Engineer"/>
                        <Contacts contacts={contacts}/>
                        <Skills skills={this.props.skills}/>
                    </div>
                    <div>
                        <header>
                            <h2>Summary</h2>
                        </header>
                        <p>My first internet-related project was released in year 2000. I enjoy building complex systems and develop the architecture of web-oriented software.</p>
                        <p>I have a very varied experience from my time in IT industry. As a person driven by passion, I’m at my best when creating exciting stuff that has meaning and purpose.</p>
                        <p>I love creative and problem-solving tasks.</p>
                        <p>Constant growth and learning is always the best way to keep my mind in shape and in my free time this is where I spend my time off.</p>

                        <Positions heading="Professional Experience" positions={positions}/>

                        <Positions heading="Education" positions={education}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
