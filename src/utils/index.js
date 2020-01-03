import {omitBy} from 'lodash';

export const omitInvalidValues = values => omitBy(values, value => (value === null || value === undefined));

export const CATEGORIES = [
    {
        title: '2016',
        children: [
            {
                name: 'eye 19x29cm pencil on paper 5.2015',
                children: [
                    {name: '', url: 'https://github.com/Xooone47/No47/blob/master/public/images/erkang.jpg?raw=true'}
                ]
            },
        ],
    },
    {
        title: '2017',
        children: [],
    },
    {
        title: '2018',
        children: [],
    },
    {
        title: '2019',
        children: [],
    },
];
