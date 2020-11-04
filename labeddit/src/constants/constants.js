export const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

const token = window.localStorage.getItem("token")

export const headers = {
    Authorization: token
}