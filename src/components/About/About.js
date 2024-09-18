import React from "react";
import './About.css'; //با فرض اینکه یک فایل CSS مربوطه برای استایل سازی دارید
import './copy';
const About = () => {
    return(
        <div className="about-container">
            <h1>About us</h1>

            <p>به وب سایت ما خوش آمدید! ما متعهد به ارائه بهترین خدمات و 
        محصولات به مشتریانمان ماموریت ما ایجاد ارزش و ایجاد تفاوت است 
        در جهان با پیشنهادات ما</p>

            <h2>Contact us</h2>

            <p>اگر سوالی دارید، در صورت تمایل با ما تماس بگیرید. ما اینجا هستیم تا کمک کنیم! 
            شما می توانید از طریق روش های زیر با ما در تماس باشید:</p>

            <ul dir="ltr" style={{fontSize:'24px', font: 'bold'}}>
                <li>Email:<br/>amirhoseinjafary85@gmail.com</li>
                <li>Phone-Number:<br/>+989029107728</li>
                <li>Location:<br/>Iran | Zanjan</li>
            </ul>

            <h2>Website Creator</h2>

            <p>این وب سایت توسط یک تیم اختصاصی از طراحان و توسعه دهندگان که 
            مشتاق ایجاد تجربیات زیبا و کاربردی وب هستند. با تیم آشنا شوید:</p>


            <ul>
                <li>AmirHossein - Lead Developer</li>
                <li>Mr.Hossein - Frontend Developer</li>
                <li>Mr.Kalantari - Supervisor</li>
            </ul>

            <h2>Our Mission</h2>

            <p>ماموریت ما ارائه محصولات با کیفیت بالا و خدمات استثنایی به مشتریان است. 
            هدف ما نوآوری و بهبود مستمر برای پاسخگویی به نیازهای در حال تغییر مشتریان است.</p>

            <h2>Follow Us...</h2>

            <p>از طریق شبکه های اجتماعی با ما در ارتباط باشید:</p>

            <ul>
            <li>Linkdin: <a href="https://www.linkedin.com/in/amir-hossien-jafary-6522842a5/">amir-hossien-jafary</a></li>
            <li>Twitter: <a href="https://www.twitter.com/yourpage">Your Page</a></li>
            <li>Instagram: <a href="https://www.instagram.com/music_with_amir/">music_with_amir</a></li>
            </ul>
        </div>
    );
} 

const ContactInfo = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('محتوا کپی شد!');
            })
            .catch(err => {
                console.error('خطا در کپی کردن: ', err);
            });
    };

    return (
        <ul>
            <li onClick={() => copyToClipboard('Email:\namirhoseinjafary85@gmail.com')}>
                Email:<br />amirhoseinjafary85@gmail.com
            </li>
            <li onClick={() => copyToClipboard('Phone-Number:\n+989029107728')}>
                Phone-Number:<br />+989029107728
            </li>
        </ul>
    );
};



export default About;


