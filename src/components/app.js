import React from 'react'
import axios from 'axios';
import CamperList from './camper_list'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentCampers: [],
            allTimeCampers: [],
            currentView: 'recentCampers'
        };
    }

    componentWillMount() {
        axios.all([this.getRecentCampers(), this.getAllTimeCampers()])
            .then(axios.spread((recentCampers, allTimeCampers) => {
                this.setState({
                    recentCampers: recentCampers.data,
                    allTimeCampers: allTimeCampers.data
                });
            }));
    }

    getRecentCampers() {
        return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    }

    getAllTimeCampers() {
        return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }

    changeView(currentView) {
        // Remember that in ES6 when variable names are the same as the values being set
        // You can just provide the values (i.e. recent: recent is the same as recent)
        this.setState({ currentView })
    }
    isActive(currentView) {
        if(this.state.currentView === currentView) {
            return 'active';
        }
    }
    pageTitle(currentView) {
        if(currentView === 'recentCampers') {
            return 'recent campers';
        } else if(currentView === 'allTimeCampers') {
            return 'all time campers';
        }
    }

    render() {
        if (!this.state.recentCampers.length && !this.state.allTimeCampers.length) {
            return(
                <div className='text-center'>
                    <i className='fa fa-cog fa-spin fa-5x'></i>
                    <h3>Loading...</h3>
                </div>
            );
        }

        return (
            <div className='col-md-12'>
                <div className='text-center'>
                    <h1>Leader Board</h1>
                    <h4 className='text-highlight'>{'Top 100 ' + this.pageTitle(this.state.currentView)}</h4>
                    <div className='mt2'>
                        <button onClick={() => this.changeView('recentCampers')} className={'btn btn-page ' + this.isActive('recentCampers')}><i className='fa fa-star-o mr1'></i>Recent</button>
                        <button onClick={() => this.changeView('allTimeCampers')} className={'btn btn-page ' + this.isActive('allTimeCampers')}><i className='fa fa-hourglass-o mr1'></i>All Time</button>
                    </div>
                </div>
                <div className='seperator'></div>
                <CamperList campers={this.state[this.state.currentView]} />
            </div>
        );
    }
}
