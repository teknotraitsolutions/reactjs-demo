import React,{ Fragment,useEffect } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getExam} from './../../actions/exam';
import formatDate from '../../utils/formatDate';

export const Exam = ({exam:{exams,loading},getExam}) => {
    useEffect(() => {
        getExam();
      }, [getExam]);
    return (
        <Fragment>
        {loading ? ( 
            <Spinner />
          ): (
        <Fragment>
            <div className="main">
                <div className="page-body">
                    <div className="table-body">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Exam Id</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                    <th>Question Count</th>
                                </tr>
                                {
                                exams.map(exam => (
                                    
                                      <tr key={exam.examId}>
                                        <td>{exam.examId}</td>
                                        <td> {exam.name} </td>
                                        <td> {formatDate(exam.date)} </td>
                                        <td> {exam.duration} </td>
                                        <td> {exam.questionCount} </td>
                                      </tr>
                                   
                                  ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
          )}
          </Fragment>
    )
}
Exam.propTypes = {
    getExam: PropTypes.func.isRequired,
    exam: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    exam: state.exam
  });
 export default connect(mapStateToProps,{getExam})(Exam); 
