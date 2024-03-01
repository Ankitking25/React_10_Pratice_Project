import styles from './contact.module.css'
import Button from '../Button/Button'
import { MdFormatAlignJustify, MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = ()=>{
    return(
        <>
          <section className={`${styles.container}`}>
            <div className={styles.contact_form}>
                <div className = {styles.top_btn}>
                 <Button text="VIA SUPPORT CHAT" icons = {<MdMessage/>}/>
                 <Button text="CONTACT US" icons = {<IoCall/>}/>
               
                </div>
                <Button isOutLine={true} text="VIA EMAIL FORM" icons = {<MdOutlineEmail/>}/>
                
                <form>
                <div className = {styles.form_control}>
                    <label type="text" name="name">Name</label>
                    <input type="text" name ="name"></input>
                </div>
                <div className = {styles.form_control}>
                    <label type="email" name="email">Email</label>
                    <input type="email" name ="email"></input>
                </div>
                <div className = {styles.form_control}>
                    <label name="text">TextArea</label>
                    <textarea rows="2" name ="text"></textarea>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:'end',
                } }>  <Button text="Submit" /></div>
              
                </form>
        
             </div>
            <div className = {styles.contact_image}>
                   <img src="img1.svg" alt="Contact From"></img>
            </div>

          </section>
        </>
    )
}
export default Contact;