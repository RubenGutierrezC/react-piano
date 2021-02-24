import "./style.css";

export default function Footer() {

    const currenyYear = new Date().getFullYear()

    return (
        <footer className="footer">
        <a href="https://newline.co">Newline.co</a>
        <br/>
        {currenyYear} 
        </footer>
    )
}
