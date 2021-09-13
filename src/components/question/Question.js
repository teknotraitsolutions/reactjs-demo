import React,{ Fragment, useState,useEffect } from 'react';
import {Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Pagination from './../pagination/Pagination';
import Table from './Table'
import {addQuestion,getQuestion} from './../../actions/question';

export const Question = ({addQuestion,getQuestion,question: { questions, loading, showModal } }) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);

    useEffect(() => {
        getQuestion();
      }, [getQuestion]);
    const indexOfLastPage = currentPage * dataPerPage;
    const indexofFirstPage = indexOfLastPage - dataPerPage;
    const currentPosts = questions.slice(indexofFirstPage,indexOfLastPage)
    const [formData, setFormData] = useState({
        type: '',
        title: '',
        marks:''
      });
    const { type,title,marks } = formData;
    const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addQuestion({type,title,marks});
        // setShow(false);
    };
    
    let [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Fragment>
        <div className="main">
            <div className="page-body">
                <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-3"><input type="submit" value="Add Question" onClick={handleShow} className="submit-btn quest" /></div>
                    <div className="col-sm-1"></div>
                </div>
                <Table questions = {currentPosts} loading={loading} />
                <div className='container page_container mt-5'>
                <Pagination
                    postsPerPage={dataPerPage}
                    totalPosts={questions.length}
                    paginate={paginate}
                />
                </div>
            </div>
        </div>
        {!showModal ? ( 
            window.location.reload()
          ): (
            <Fragment>
                <Modal show={show} animation={false} onHide={handleClose}>
                <Modal.Header>
                    <h4>Add Question</h4>
                    <i className = "far fa-times-circle close"  onClick={handleClose}></i>
                </Modal.Header>
                <Modal.Body >
                <form onSubmit={onSubmit}>    
                    <div >   
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">Title:</div>
                            <div className="col-sm-6"><input type="text"  className="form-control title" name = "title" value={title} onChange={onChange} required/></div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">Type:</div>
                            <div className="col-sm-6"><select className="form-control " name = "type" value={type} onChange={onChange} required><option value=''>Select</option><option>MCQ</option><option >Descriptive</option></select></div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-2">Marks:</div>
                            <div className="col-sm-6"><input type="number"  className="form-control question" name = "marks" value={marks} onChange={onChange} min="1" max="10" required/></div>
                        </div>
                        <br />
                        <div className="submit_button">
                            <input type="submit" value="Submit" className="submit-btn" />
                        </div>
                    </div>
                </form>
                </Modal.Body>
            </Modal>
        </Fragment>
        )}
      </Fragment>
    )
}
Question.propTypes = {
    question: PropTypes.object.isRequired,
    addQuestion:PropTypes.func.isRequired,
    getQuestion:PropTypes.func.isRequired 
  };
  const mapStateToProps = state => ({
    question: state.question
  });
 export default connect(mapStateToProps,{addQuestion,getQuestion})(Question); 
