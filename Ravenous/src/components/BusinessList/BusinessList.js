import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        return <Business business={business} key={business.id} /> //Every rendered list item gets an unique ID of each business
                    })
                }
            </div>
        );
    }
}

export default BusinessList; //Exports the BusinessList class