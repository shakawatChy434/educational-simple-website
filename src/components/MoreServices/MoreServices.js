import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MoreService from '../MoreService/MoreService';

const MoreServices = () => {
    const [moreServices, setMoreServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setMoreServices(data));

    }, [])
    return (

        <div className="" style={{ marginTop: '.5rem', }}>
            <Row xs={1} md={3} className="g-4">
                {
                    moreServices.map(moreSevice => <MoreService
                        key={moreSevice.courseId}
                        moreService={moreSevice}
                    ></MoreService>)
                }
            </Row>
        </div>

    );
};

export default MoreServices;