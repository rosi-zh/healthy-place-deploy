import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

export default function ArticleDelete({ show, close, handleDelete, title, deleteError }) {

    return (
        <>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete "{title}"?

                {deleteError && <Alert variant="danger">{deleteError}</Alert>}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}