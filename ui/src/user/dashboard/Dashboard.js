import React, { Component } from 'react';
import { getAllPolls, getUserCreatedPolls, getUserVotedPolls } from '../../util/APIUtils';
import { castVote } from '../../util/APIUtils';
import LoadingIndicator  from '../../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { CITY_LIST_SIZE } from '../../constants';
import { withRouter } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [],
            page: 0,
            size: 10,
            totalElements: 0,
            totalPages: 0,
            last: true,
            currentVotes: [],
            isLoading: false
        };
    }

    render() {
        const cityViews = [];
        this.state.cityList.forEach((city, cityIndex) => {
            //cityViews.push(<City />)
        });

        return (
            <div id="wrapper">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand">
                                <a href="#">
                                    <a href="http://www.redbee.io/" target="_blank">
                                    <img class="brand" src="http://www.redbee.io/assets/images/logo.jpg" width="50" height="50"/> </a>
                                </a>
                            </a>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <form class="navbar-form navbar-right" role="search">
                                <div class="form-group">
                                    <input id="city" type="text" class="form-control" placeholder="Enter City" required />
                                </div>
                                <button class="btn btn-default">Obtener Clima</button>
                                <button class="btn btn-default">Guardar Dashboard</button>
                            </form>
                        </div>
                    </div>
                </nav>


                <div class="dashboard-container">
                    <div class="city-container">
                        <a href="#"><span class="glyphicon glyphicon-remove"></span></a>
                        <h4>title</h4>
                        <div>description</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Dashboard);