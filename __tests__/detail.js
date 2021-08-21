/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Detail from '../pages/detail'

describe('App', () => {
    it('메뉴가 렌더링 되어야 한다', () => {
        const { getByRole } = render( < Detail / > );

        const menu = getByRole('navigation', {
            name: 'fastcampus'
        })

        expect(menu).toBeInTheDocument();
    })

    it('배너가 렌더링 되어야 한다', () => {
        const { getByRole } = render( < Detail / > );

        const banner = getByRole('banner')

        expect(banner).toBeInTheDocument();
    })

    it('강의 목록이 렌더링 되어야 한다', () => {
        const { getByTitle } = render( < Detail / > );

        const lectureList = getByTitle('lectureList')
        expect(lectureList).toBeInTheDocument();
    })

})