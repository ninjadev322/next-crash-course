/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const article = () => {
    const router = useRouter()
    // console.log(router)
    const { id } = router.query
    // console.log(router.query)
    return (
        <div>This is {id} article.</div>
    );
};

// index.propTypes = {};

export default article;
