import Head from 'next/head'
import Resume from '../components/resume'
import { getAllUserData } from '../lib/profile'

function PortfolioPage({ users }) {

    return (
        <div>
            <Head>
                <title>marcos.lemus.io</title>
            </Head>
            <Resume value={users['marcos']}></Resume>
        </div>
    )
}

//TODO: figure out how this would work in a class
export async function getStaticProps(){
    const users = getAllUserData()
	return {
		props : {
            users
		}
	}
}


export default PortfolioPage;
