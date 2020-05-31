import styles from './job.module.scss'
import React, {Component} from 'react'

class Job extends Component {
    constructor(props) {
        super(props);
        this.job = props.value
    }

    render(){
        return (
            <div className={styles.jobContainer}>
                <div className={styles.dateContainer}>
                    <div className={styles.startDate}>{this.job.startDate}</div>
                    <div className={styles.endDate}>{this.job.endDate}</div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.company}>{this.job.company}</div>
                    <div className={styles.title}>{this.job.title}</div>
                    <div className={styles.description}>
                        {this.job.description.map((d, i) => {
                            return (<p key={i}>{d}</p>)
                        })}
                    </div>
                    <hr className={styles.divider}/>
                </div>
            </div>
        )
    }
}

export default Job