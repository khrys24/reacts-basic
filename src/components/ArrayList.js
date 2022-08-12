import React from "react";

const contactInfo = [
    {name: "Khrystine", phone: "09123456789"},
    {name: "Kirk Camai", phone: "09123492739"},
    {name: "Karlo", phone: "09047393439"},
];

const contacts = contactInfo.map( (contact, index) => {
    return <li key={index}> {contact.name}: {contact.phone}</li>
});

class ArrayList extends React.Component {
    render() {
        return (
            <ul>
                {contacts}
            </ul>
        );
    }
}

export default ArrayList;
