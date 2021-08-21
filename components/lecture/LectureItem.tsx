import React from 'react';
import { Lecture } from '../../interface/lecture';
import TagList from '../tags/tagList';


interface Props {
    lecture: Lecture;
}


const LectureItem = ({ lecture }: Props): JSX.Element => {
    return (
        <div>
            <img src={lecture.thumb} alt='초격차 패키지' />
            <TagList tagListData={lecture.tags} />
            <h3>{lecture.title}</h3>
            <p>{lecture.description}</p>
        </div>
    )
}

export default LectureItem;