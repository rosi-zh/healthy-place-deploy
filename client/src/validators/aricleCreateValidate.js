const articleCreateValidate = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    } else if (values.title.length < 2) {
        errors.title = 'Title must be atleast 2 characters long';
    }

    if (!values.imageUrl) {
        errors.imageUrl = 'Image URL is required';
    }

    if (!values.text) {
        errors.text = 'Text is required';
    } else if (values.text.length < 10) {
        errors.text = 'Text must be atleast 10 characters long';
    }    

    return errors;
}

export default articleCreateValidate;