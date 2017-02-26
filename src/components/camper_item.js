import React from 'react';
import Moment from 'react-moment';

const CamperItem = ({ camper, rank}) => {
    return(
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 animated bounceIn'>
            <a href={`https://freecodecamp.com/${ camper.username }`} target='_blank'>
                <div className='panel panel-default'>
                    <div className='rank'>
                        <div className='rank-wrapper'>
                            <div className='rank-number'>{ rank }</div>
                        </div>
                    </div>
                    <div className='panel-top'>
                        <img src={ camper.img } />
                    </div>
                    <div className='panel-body text-center'>
                        <h4>{ camper.username }</h4>
                        <div className='small'>Last active <Moment fromNow>{ camper.lastUpdate }</Moment></div>
                    </div>
                    <div className='panel-footer'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <div className='small text-uppercase'>Recent</div>
                                { camper.recent }
                            </div>
                            <div className='col-xs-6'>
                                <div className='small text-uppercase'>All Time</div>
                                { camper.alltime }
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CamperItem;
