import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const format = (userName) => `@${userName}`

    return(
        <section className='App'>
         <TwitterFollowCard formatUserName={format}  userName="Nelshon99" name= "Nelson David Hernandez Badel" />
         <TwitterFollowCard formatUserName={format}  userName="midudev" name= "Miguel Angel Duran" />
         <TwitterFollowCard formatUserName={format}  userName="pheralp" name= "Pablo Hernandez" />
        </section>
       
        
    )
}