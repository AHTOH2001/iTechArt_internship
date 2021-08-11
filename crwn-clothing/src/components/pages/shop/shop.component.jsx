import React from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id, title, items}) => (
                    <div key={id}>
                        <CollectionPreview title={title} items={items}/>
                    </div>
                ))}

            </div>
        );
    }

}


export default ShopPage