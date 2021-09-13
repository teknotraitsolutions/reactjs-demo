import React,{ Fragment,useEffect } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getBranch} from './../../actions/branch';

export const Branch = ({branch:{branches,loading},getBranch}) => {
    useEffect(() => {
        getBranch();
      }, [getBranch]);
    return (
        <Fragment>
            <div className="main">
                <div className="page-body">
                    <div className="table-body">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Branch Id</th>
                                    <th>Name</th>
                                    <th>Capacity</th>
                                </tr>
                                {
                                branches.map(branch => (
                                    
                                      <tr key={branch.branchId}>
                                        <td>{branch.branchId}</td>
                                        <td> {branch.name} </td>
                                        <td> {branch.capacity} </td>
                                      </tr>
                                   
                                  ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Branch.propTypes = {
    getBranch: PropTypes.func.isRequired,
    branch: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    branch: state.branch
  });
 export default connect(mapStateToProps,{getBranch})(Branch); 
