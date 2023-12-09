const articleCreateValidate = (values) => {
    const errors = {};

    if (!values.title.trim()) {
        errors.title = 'Title is required';
    } else if (values.title.trim().length < 2) {
        errors.title = 'Title must be atleast 2 characters long';
    }

    if (!values.imageUrl.trim()) {
        errors.imageUrl = 'Image URL is required';
    }

    if (!values.text.trim()) {
        errors.text = 'Text is required';
    } else if (values.text.trim().length < 10) {
        errors.text = 'Text must be atleast 10 characters long';
    }    

    return errors;
}

export default articleCreateValidate;