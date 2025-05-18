
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const format = (userName) => `@${userName}`
    const users = [
        {
            userName: 'Nelshon99',
            name: 'Nelson David Hernandez Badel',
            isFollowing: true

        },
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernandez',
            isFollowing: false
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hernandez',
            isFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false
        }

    ]

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>


    )
}