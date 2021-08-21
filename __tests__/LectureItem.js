/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Lectureitem from '../components/lecture/Lectureitem';

const mockCategory = {
    id: 0,
    name: '프로그래밍',
}

const mockTags = [{
        id: 0,
        name: '평생소장'
    },
    {
        id: 1,
        name: 'AWS'
    },
    {
        id: 2,
        name: 'DevOps'
    }
]
const lectureMockData = {
    id: 0,
    category: mockCategory,
    title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
    tags: mockTags,
    description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
    thumb: '/thumb.jpg',
    isHot: true,
    isNew: true,
}

describe('강의 아이템은', () => {
            it('썸네일을 가지고 있어야 한다.', () => {
                        const { getByAltText } = render( < Lectureitem lecture = { lectureMockData }
                            / > );

                            const Thumb = getByAltText('초격차 패키지'); expect(Thumb).toBeInTheDocument();
                        });

                    it('뱃지를 가지고 있어야 한다..', () => {
                            const { getByText } = render( < Lectureitem lecture = { lectureMockData }
                                / > );

                                const Badge = getByText('평생소장'); expect(Badge).toBeInTheDocument();
                            });

                        it('강의 제목을 렌더링 할 수 있어야 한다.', () => {
                                const { getByRole } = render( < Lectureitem lecture = { lectureMockData }
                                    / > );

                                    const Title = getByRole('heading', {
                                        name: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영'
                                    }); expect(Title).toBeInTheDocument();
                                });

                            it('강의 설명을 렌더링 해야한다.', () => {
                                    const { getByText } = render( < Lectureitem lecture = { lectureMockData }
                                        / > );

                                        const Desc = getByText('개발\/운영\/아키텍트를 아우르는 AWS\/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요'); expect(Desc).toBeInTheDocument();
                                    });
                            })