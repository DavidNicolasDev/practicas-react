import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: "kittyBeauty",
        name: "Gatito",
        initialIsFollowing: true
    },
    {
        userName: "puppyLove",
        name: "Perrito",
        initialIsFollowing: false
    },
    {
        userName: "hamsterBeauty",
        name: "Hamster",
        initialIsFollowing: false
    },
    {
        userName: "rabbyBeauty",
        name: "Rabbyt",
        initialIsFollowing: true
    }
]


export function App() {
    const addArroba = (userName) => `@${userName}`;
    //const gatito = {isFollowing: true, formatUserName: addArroba};
    return (
        <section className='App'>
            {/*  
            <TwitterFollowCard {...gatito}>
                Gatito
            </TwitterFollowCard> 
            <TwitterFollowCard
                formatUserName={addArroba}
                userName="kittyBeauty"
            >
                Gatito
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={addArroba}
            >
                Perrito
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={addArroba}
            >
                Hamster
            </TwitterFollowCard>
            */}
            {
                users.map(user => {
                    const { userName, name, initialIsFollowing } = user;
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            formatUserName={addArroba}
                            initialIsFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>

    )
}
