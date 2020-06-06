import Head from 'next/head'
import Resume from '../components/resume'
import Layout from '../components/layout'
import Parallax from '../components/parallax'
import { getAllUserData } from '../lib/profile'

function PortfolioPage({ users }) {
    return (
        <div className='container'>
            <Layout>
                <Head>
                    <title>marcos.lemus.io</title>
                </Head>
                <Resume value={users['marcos']}></Resume>
            </Layout>

            <style jsx global>{`
                html, 
                body {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                }

                .container {
                    width: 100vw;
                    height: 100vh;
                }
            `}</style>
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
