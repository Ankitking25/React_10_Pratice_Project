import styles from './Button.module.css';
function Button(props) { 
    const {isOutLine,icons,text} = props;  //object
    return (
        <>
          <button className={isOutLine ? styles.secondary_btn : styles.primary_btn}>
            {icons}
            {text}
          </button>
        </>
    );
}

export default Button;