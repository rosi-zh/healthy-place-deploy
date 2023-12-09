const contactsMessageValidate = (values) => {
    const errors = {};
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

    if (!values.name.trim()) {
        errors.name = 'Name is required';
    } else if (values.name.trim().length < 2) {
        errors.name = 'Name must be atleast 2 characters long';
    }

    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.subject.trim()) {
        errors.subject = 'Subject is required';
    } else if (values.subject.trim().length < 2) {
        errors.subject = 'Subject must be atleast 2 characters long';
    }

    if (!values.message.trim()) {
        errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
        errors.message = 'Message must be atleast 10 characters long';
    }    

    return errors;
}

export default contactsMessageValidate;