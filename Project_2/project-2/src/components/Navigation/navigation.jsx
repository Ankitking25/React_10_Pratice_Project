import styles from './navigation.module.css'
const Navigate = ()=>{
    return(
        <>       
              <nav className={`container`}>
               <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
               </ul>
               </nav>
        </>
    )
}

export default Navigate;