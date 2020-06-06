import styles from './parallax.module.scss'
import React, {Component} from 'react'

export default class Parallax extends Component{
    state = {
        x: 0,
        y: 0,
    }

    constructor(props){
        super(props);

        this.background = '/images/background.png'
        this.middleground = '/images/middleground.png'
        this.foreground = '/images/foreground.png'

        if(props.background !== undefined){
            this.background = props.background;
        }

        if(props.foreground !== undefined){
            this.foreground = props.foreground;
        }

    }

    componentDidMount(){
        window.addEventListener('mousemove', this.handleMouseMove, false);
    }

    render(){
        const left = this.state.x + '%';
        const leftleft = this.state.x/2 + '%'
        return (
            <div className={styles.container}>
                <img src={this.background} className={styles.background}/>
                <img src={this.middleground} className={styles.middleground} style={{left: leftleft}}/>
                <img src={this.foreground} className={styles.foreground} style={{left: left}}/>
            </div>
        )
    }

    handleMouseMove = (e) => {
        const scale = 4;
        this.setState({
            x: e.clientX/window.innerWidth * scale - scale,
            y : e.clientY/window.innerHeight * scale - scale,
        });
    }

}
