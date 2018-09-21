import * as React from "react"
import { Title } from "./Title";

interface HeaderProps {

}

interface HeaderState {

}

export class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);


    }

    render() {
        return (<div style = {{height: '15vh', width: '100vw', background: 'rgb(168, 218, 255)'}}> 
            <Title />
        </div>)
    }

}