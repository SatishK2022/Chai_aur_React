const githubInfoLoader = async () => {
    const response = fetch("https://api.github.com/users/satishk2022")
    return (await response).json()
}

export default githubInfoLoader;