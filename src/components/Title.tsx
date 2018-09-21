import * as React from "react"

interface TitleProps {

}

interface TitleState {
    content: string
}

export class Title extends React.Component<TitleProps, TitleState> {
    
    constructor(props: TitleProps) {
        super(props);

        this.state = {
            content: "Rajan Saini"
        }

    }

    render() {
        return (<div style = {{
            height: '100%', 
            width: '25%', 
            background: 'rgb(79, 180, 255)',
            font: '5vh Poppins',
            color: 'white'
        }}> {this.state.content} </div>)
    }

}