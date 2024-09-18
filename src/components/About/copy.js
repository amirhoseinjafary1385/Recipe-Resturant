import React from 'react';

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

export default ContactInfo;
