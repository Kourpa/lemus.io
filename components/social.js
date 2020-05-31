import styles from './social.module.scss'

function Social(props){
    if(props.value === undefined) {
        return (<></>)
    }

    let links = []
    let key = 0
    for (const site in props.value) {
        let link = null;
        const url = props.value[site];
        let image = '/images/social/' + site + '.png'

        links.push(
            <a key={key++} className={styles.link} href={url}>
                <img src={image}/>
            </a>
        )
    }
    // const links = props.value.map(url => {

    // })

    return (
        <div className={styles.container}>
            {links}
        </div>
    )
}



export default Social