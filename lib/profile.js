import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const profileDirectory = path.join(process.cwd(), 'profiles')
const userFilename = 'user.md'
const jobsDirectoryName = 'jobs'

export function getAllUserData() {
    const users = {}
    const profiles = fs.readdirSync(profileDirectory)

    profiles.map(p => {
        users[p] = getUserData(p)
    })

    return users
}

function getUserData(username) {
    const userDirectory = path.join(profileDirectory, username)
    const userFilePath = path.join(userDirectory, userFilename)

    const fileContents = fs.readFileSync(userFilePath, 'utf8')

    const matterResults = matter(fileContents)

    return {
        ...matterResults.data,
        description: matterResults.content,
        jobs: getSortedJobs(username)
    }
}

function getSortedJobs(username){
    if (username !== null && username !== undefined && username !== "") {
        const userDirectory = path.join(profileDirectory, username)
        const jobsDirectory = path.join(userDirectory, jobsDirectoryName)

        const jobFiles = fs.readdirSync(jobsDirectory)
        const allJobsData = jobFiles.map(filename => {
            const fullpath = path.join(jobsDirectory, filename)
            const fileContents = fs.readFileSync(fullpath, 'utf8')

            const matterResults = matter(fileContents)

            return {
                ...matterResults.data,
                description: matterResults.content.split("\n")
            }
        })

        return allJobsData.sort((a, b) => {
            if (typeof b.endDate === "string") {
                return 1
            } 

            if (a.endDate < b.endDate) {
                return 1
            } else {
                return -1
            }
        })
    }


    return {}
}