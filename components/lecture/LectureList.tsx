import React from 'react';
import LectureItem from './LectureItem';
import { useQuery } from 'react-query';

const LectureList = (): JSX.Element => {
    const { isLoading, data } = useQuery('lecture_list', () => {
        return fetch('/api/lectures').then((res) => {
            return res.json();
        }).then((res) => {
            return res;
        })
    })

    if (isLoading) {
        return <div>Loading ...</div>
    }

    const lectureItems = data.lectureList.map((lecture) => {
        return (<LectureItem key={lecture.id} lecture={lecture} />)
    })

    

    return (
        <div>
            { lectureItems }
        </div>
    )
}

export default LectureList;