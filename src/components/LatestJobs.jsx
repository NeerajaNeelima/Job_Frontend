import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    const user = useSelector(store => store.auth.user); // Assuming user info is stored in auth slice

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {user ? (
                    allJobs.length <= 0 ? (
                        <span>No Job Available</span>
                    ) : (
                        allJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                    )
                ) : (
                    <span>Please log in to fetch the latest jobs.</span>
                )}
            </div>
        </div>
    );
};

export default LatestJobs;
