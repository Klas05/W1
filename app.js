import { exec } from 'child_process'

let repoURL = 'https://github.com/MaxLindquistLnu/Webbteknik-uppgift-3.git'

async function cloneRepo (repoURL) {

exec(`mkdir clonedRepo && cd ./clonedRepo && git clone ${repoURL}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error cloning repository: ${error.message}`)
        return
    }
    console.log(`Repository cloned successfully!`)
    removeClone()
})
}

function removeClone () {
    exec(`rm -r ./clonedRepo`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error removing files: ${error.message}`)
        return
    }
    console.log(`Files removed successfully!`)
})
}

await cloneRepo(repoURL)


