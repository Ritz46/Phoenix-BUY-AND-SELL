import React from 'react';
import ReactDOM from 'react-dom/client';
import { SavedAddresseshead, AddressList , AddNewAddressForm} from '../components/savedAddresses_components';

const SavedAddresses = () => {
    return (
        <div className='p-10'>
        {/* <SavedAddresseshead /> */}
        <AddressList/>
        <AddNewAddressForm/>
        </div>
        
    )
}

export default SavedAddresses;