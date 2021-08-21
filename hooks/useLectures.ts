import { useQuery } from 'react-query';

const useLectures = (categories: string) => {
    return useQuery('lecture_list', () => {
        return fetch(`/api/lectures?categories=${categories}`).then((res) => {
            return res.json();
        }).then((res) => {
            return res;
        })
    })
}

export default useLectures;