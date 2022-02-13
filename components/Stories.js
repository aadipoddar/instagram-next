import { useEffect, useState } from "react"
import Story from './Story';

function Stories() {

    const { faker } = require('@faker-js/faker');
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        console.log(suggestions)
        setSuggestions(suggestions)
    }, [])

    return (
        <div>
            {suggestions.map((profile) => (
                <Story
                    key={profile.id}
                    image={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories