import React, {Fragment} from 'react';
import spinner from './spinner.gif';



const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='Loading...' style={{ width: '250px', display: 'block', margin:'auto'}}></img>
        </Fragment>
    )
}

export default Spinner
