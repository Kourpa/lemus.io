import styles from './resume.module.scss'
import Profile from '../components/profile'
import JobProvider from './jobProvider'
import React, { Component } from 'react'
import { useRouter } from 'next/router'

class Resume extends Component{
    constructor(props){
        super(props)
        let value = props.value
        if (value !== null && value !== undefined){
            this.user = value
            this.jobs = value.jobs
        } else {
            this.user = {
                img: '/images/profile.jpg',
                name: 'Cat',
                title: 'In The Hat',
                content: "Knows a lot about that",
            }

            this.jobs = []
        }
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.profileContainer}>
                    <Profile value={this.user}/>
                </div>
                <div className={styles.jobContainer}>
                    <JobProvider value={this.jobs}/>
                </div>
            </div>
        )
    }
}

export default Resume