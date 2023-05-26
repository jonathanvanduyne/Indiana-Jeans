export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = submissions.map(
        (submission) => {
            return `<section class="submissions">
            <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
            <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
        }
    )

    submissionsHTML += divStringArray.join("")

    return submissionsHTML
}