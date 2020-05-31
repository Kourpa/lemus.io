import styles from './profile.module.scss'
import Social from '../components/social'
import React, {Component} from 'react'

class Profile extends Component{
    constructor(props) {
        super(props)
        
        this.user = props.value

        if(this.user === null || this.user === undefined) {
            this.user = {
                img: '/images/profile.jpg',
                name: 'Cat',
                title: 'In The Hat',
                content: "Knows a lot about that",
                jobs: []
            }
        }
    }

    render(){
        const email = 'mailto:' + this.user.email
    
        return (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src={this.user.image}
                        className={styles.image}
                        alt={this.user.name}
                    />
                </div>
                <div className={styles.name}>{this.user.name}</div>
                <div className={styles.title}>{this.user.title}</div>
                <div className={styles.description}>{this.user.description}</div>
                <div className={styles.email}>
                    <a href={email}>{this.user.email}</a>
                </div>
                <div className={styles.links}>
                    <Social value={this.user.links} />
                </div>
            </div>
        )
    }
}

export default Profile