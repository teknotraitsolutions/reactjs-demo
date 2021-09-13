import React,{useState} from 'react';
import Chart from './Chart';

export const Admin = () => {
    // const [activebar,setActive] = useState(false);
    return (
        
        <div className="main">
            <div className="page-body">
                <div className="dashboard-body">
                    <div className="dash-head">
                        <div className="row top-head">
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 spacing">
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <div className="overview spcl-text mob-text">
                                    <span className="head-icon"><i className="fas fa-chevron-circle-right"></i></span> 
                                    <span className="text">  Start Overview</span>
                                </div>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 filter-space">
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <div className="filter-dash spcl-text mob-text">
                                    <span className="filter-show" >
                                        Show Filter 
                                    </span>
                                    <span className="head-filter"><i className="fas fa-filter"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="dash-body">
                            <div className="card first-card">
                                <div className="inside-card">
                                    <div className="card-no">
                                        <span className="dash-no" >87</span>
                                    </div>
                                    
                                    <div className="card-icon">
                                        <span className="dash-logo" ><i className="fas fa-store"></i></span>
                                    </div>
                                </div>
                                <br />
                                <div className="card-content">
                                    <span className="card-text">Total Stores</span>
                                </div>
                                <div className="card-sub-content">
                                    <span className="card-sub-text">Here goes the line</span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="inside-card">
                                    <div className="card-no">
                                        <span className="dash-no2" >32</span>
                                    </div>
                                    
                                    <div className="card-icon">
                                        <span className="dash-logo2" ><i className="fas fa-tags"></i></span>
                                    </div>
                                </div>
                                <br />
                                <div className="card-content">
                                    <span className="card-text">Brands</span>
                                </div>
                                <div className="card-sub-content">
                                    <span className="card-sub-text">Here goes the line</span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="inside-card">
                                    <div className="card-no">
                                        <span className="dash-no3" >75</span>
                                    </div>
                                    
                                    <div className="card-icon">
                                        <span className="dash-logo3" ><i className="fas fa-dice-d6"></i></span>
                                    </div>
                                </div>
                                <br />
                                <div className="card-content">
                                    <span className="card-text">Products</span>
                                </div>
                                <div className="card-sub-content">
                                    <span className="card-sub-text">Here goes the line</span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="inside-card">
                                    <div className="card-no">
                                        <span className="dash-no4" >98</span>
                                    </div>
                                    
                                    <div className="card-icon">
                                        <span className="dash-logo4" ><i className="fas fa-cog"></i></span>
                                    </div>
                                </div>
                                <br />
                                <div className="card-content">
                                    <span className="card-text">On Promotion</span>
                                </div>
                                <div className="card-sub-content">
                                    <span className="card-sub-text">Here goes the line</span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="inside-card">
                                    <div className="card-no">
                                        <span className="dash-no5" >95</span>
                                    </div>
                                    
                                    <div className="card-icon">
                                        <span className="dash-logo5" ><i className="fas fa-chart-line"></i></span>
                                    </div>
                                </div>
                                <br />
                                <div className="card-content">
                                    <span className="card-text">Avg. Facings</span><span className="card-sub-text">/store</span>
                                </div>
                                <div className="card-sub-content">
                                    <span className="card-sub-text">Here goes the line</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dash-body-down">
                        <div className="row top-body">
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 spacing">
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div className="overview spcl-text mob-text">
                                    <span className="head-icon"><i className="fas fa-code-branch"></i></span> 
                                    <span className="text">  Product Sharing Analysis</span>
                                </div>  
                            </div>
                        </div>
                        <div className="dashbord-footer">
                            <div className="spacing">
                            </div>
                            <div className="dash-body-left">
                                <div className="row">
                                    <div className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                        <div className="row body-text">
                                            Product List
                                        </div>
                                        <div className="row body-sub-text">
                                            Here goes the supporting line or text
                                        </div>
                                    </div>
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                        
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="month-drop">
                                            <span className="show-filter" >
                                                Last Month 
                                            </span>
                                            <span className="head-filter"><i className="fas fa-chevron-down"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="charts">
                                    <Chart />
                                </div>
                            </div>
                            <div className="dash-body-right body-card">
                                <div className="row">
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 share">
                                        <div className="row body-text">
                                            Increase In Share
                                        </div>
                                        <div className="row body-sub-text">
                                            Here goes the supporting line 
                                        </div>
                                        <div className="line"></div>
                                        <div className="row alt-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    55%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Garnier
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-up">
                                                <i className="fas fa-arrow-circle-up"></i>
                                            </div>   
                                        </div>
                                        <div className="row main-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    27%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Amul
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-up">
                                                <i className="fas fa-arrow-circle-up"></i>
                                            </div> 
                                        </div>
                                        <div className="row alt-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    15%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Dove
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-up">
                                                <i className="fas fa-arrow-circle-up"></i>
                                            </div> 
                                        </div>
                                        <div className="row main-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    45%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Patanjali
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-up">
                                                <i className="fas fa-arrow-circle-up"></i>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 vertical-line"></div>
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 dec-share">
                                        <div className="row body-text">
                                            Decrease In Share
                                        </div>
                                        <div className="row body-sub-text">
                                            Here goes the supporting line 
                                        </div>
                                        <div className="line"></div>
                                        <div className="row alt-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    22%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Nestle
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-down">
                                                <i className="fas fa-arrow-circle-down"></i>
                                            </div>   
                                        </div>
                                        <div className="row main-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    16%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Britania
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-down">
                                                <i className="fas fa-arrow-circle-down"></i>
                                            </div> 
                                        </div>
                                        <div className="row alt-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    15%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Lays
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-down">
                                                <i className="fas fa-arrow-circle-down"></i>
                                            </div> 
                                        </div>
                                        <div className="row main-card">
                                            <div className="col-5 col-sm-5 col-md-5col-lg-5 col-xl-5">
                                                <div className="row share-text">
                                                    10%
                                                </div>
                                                <div className="row share-sub-text">
                                                    Pepsi
                                                </div>
                                            </div>
                                            <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                            </div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 share-down">
                                                <i className="fas fa-arrow-circle-down"></i>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;