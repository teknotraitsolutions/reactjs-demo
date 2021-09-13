import React,{ Fragment,useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getQuestion} from '../../actions/question';
export const Table = ({getQuestion,questions,loading }) => {
    useEffect(() => {
        getQuestion();
      }, [getQuestion]);
    return (
        <Fragment>
        {loading ? ( 
            <Spinner />
          ): (
        <Fragment>
                <div className="table-body">
                    <table>
                        <tbody>
                            <tr>
                                <th>Question Id</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Marks</th>
                            </tr>
                             {
                                questions.map(question => (
                                    
                                      <tr key={question.questionId}>
                                        <td>{question.questionId}</td>
                                        <td> {question.title} </td>
                                        <td> {question.type} </td>
                                        <td> {question.marks} </td>
                                      </tr>
                                   
                                  ))
                            }
                 
                        </tbody>
                    </table>
                </div>
                </Fragment>
                )}
                </Fragment>

    )
}
Table.propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestion:PropTypes.func.isRequired 
  };
  
 export default connect(null,{getQuestion})(Table); 