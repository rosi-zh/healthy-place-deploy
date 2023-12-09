const registerValidate = (values) => {
    const errors = {};
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

    if (!values.firstName.trim()) {
        errors.firstName = 'First name is required';
    } else if (values.firstName.trim().length < 2) {
        errors.firstName = 'First name must be atleast 2 characters long';
    }

    if (!values.lastName.trim()) {
        errors.lastName = 'Last name is required';
    } else if (values.lastName.trim().length < 2) {
        errors.lastName = 'Last name must be atleast 2 characters long';
    }

    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters long';
    }

    if (!values.rePassword) {
        errors.rePassword = 'Reapeat password is required';
    } else if (values.rePassword !== values.password) {
        errors.rePassword = 'Passwords do not match';
    }

    return errors;
}

export default registerValidate;