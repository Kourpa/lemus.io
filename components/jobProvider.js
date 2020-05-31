import styles from './job.module.scss'
import Job from './job'
import React, { Component} from 'react'

class JobProvider extends Component {
    constructor(props) {
        super(props);
        this.jobList = props.value

        if(this.jobList === null || this.jobList === undefined) {
            this.jobList = []
        }
    }

    render() {
        const jobElements = this.jobList.map((job, index, list) => {
            let divider = (<></>)

            if (index !== list.length - 1 || true) {
                divider = (<hr className={styles.divider}/>);
            }

            return (
                <div key={index.toString()}>
                    <Job value={job} />
                </div>
            )
        });

        return (
            <div className={styles.container}>
                <div className={styles.container_title}>Experience</div>
                {jobElements}
            </div>
        )
    }
}

export default JobProvider