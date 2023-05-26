import { OwnJeansChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"
import { SubmissionList } from "./submissions.js"


const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = saveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
`
}

document.addEventListener("newSubmissionCreated", render)

render()