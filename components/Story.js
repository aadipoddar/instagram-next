function Story({ image, username }) {
    return (
        <div>
            <img src={image} alt="profile" />
            <p>{username}</p>
        </div>
    )
}

export default Story