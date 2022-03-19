import * as md5 from 'md5'

document.getElementById('sender-email').addEventListener('input', onSenderChange, { passive: true })
document.getElementById('received').innerHTML = new Date().toLocaleString([], {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
})

function onSenderChange(event)
{
    let email = event.target.textContent.trim()

    if (isValidEmail(email)) {
        updatePicture(email)
    }
}


function updatePicture(email)
{
    document.getElementById('sender-picture').setAttribute('src', 'https://www.gravatar.com/avatar/' + md5(email) + '?s=400&d=/images/default-picture.jpg')
}


/**
 * Formally check, wether a String is a valid e-mail address.
 * Props to https://stackoverflow.com/a/46181/635733
 *
 * @param {String} email
 * @returns Boolean
 */
function isValidEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
