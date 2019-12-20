import React, { PureComponent } from "react";
import Contacts from "../Contacts";
import Education from "../Education";
import List from "../List";
import NameTitle from "../NameTitle";
import Photo from "../Photo";
import Positions from "../Positions";
import Skills from "../Skills";

import "./styles.scss";

export interface Profile {
    name: string;
    title: string;
    summary: string;
}
export interface Hobby {
    title: string;
}
export interface AppGlobalState {
    printable: boolean;
}

interface AppProps {
    profile: Profile;
    hobbies: Hobby[];
    load: () => void;
    printable: boolean;
    switchPrintable: (printable: boolean) => void;
}

class App extends PureComponent<AppProps> {
    public componentDidMount() {
        document.title = `CV - ${document.title}`;
        this.props.load();
    }

    public render() {
        const { name, title, summary } = this.props.profile;
        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        <Photo src="/images/face.jpg"/>
                        <NameTitle name={name} title={title}/>
                        <Contacts />
                        <Skills />
                        <List heading="Hobbies" items={this.props.hobbies} />
                    </div>
                    <div>
                        <a className="switch-printable" onClick={this.togglePrintable}>
                            {this.props.printable ? "Back to browser-friendly view" : " Printing-friendly view"}
                        </a>
                        <header>
                            <h2>Summary</h2>
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: summary }} />

                        <Positions heading="Professional Experience" />

                        <Education heading="Education" />

                    </div>
                </div>
            </div>
        );
    }

    private togglePrintable = () => {
        this.props.switchPrintable(!this.props.printable);
    }

}

export default App;
