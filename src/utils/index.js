import {omitBy} from 'lodash';
import url1 from '../works/2016/eye 19x29cm pencil on paper 5.2015/1.jpg';
import url2 from '../works/2016/eye 19x29cm pencil on paper 5.2015/2.jpg';
import url3 from '../works/2016/eye 19x29cm pencil on paper 5.2015/3.jpg';
import url4 from '../works/2016/eye 19x29cm pencil on paper 5.2015/4.jpg';
import url5 from '../works/2016/imprint2016/60x60cm wire on cystosepiment 12.2015.jpg';
import url6 from '../works/2016/imprint2016/60x90cm wire,toner,acrylic on cystosepiment 11.2016.jpg';
import url7 from '../works/2016/imprint2016/IMG_2993.jpg';
import url8 from '../works/2016/imprint2016/新建文件夹/45x60cm wire,toner,acrylic  on cystosepiment 12.2017.jpg';
import url9 from '../works/2016/imprint2016/新建文件夹/78x108cm charcoal, toner on paper 4.2017.jpg';
import url10 from '../works/2016/imprint2016/新建文件夹/IMG_2980.jpg';
import url11 from '../works/2016/imprint2016/新建文件夹/IMG_2983.jpg';
import url12 from '../works/2016/imprint2016/新建文件夹/IMG_2984.jpg';
import url13 from '../works/2016/imprint2016/新建文件夹/IMG_3001.jpg';
import url14 from '../works/2016/imprint2016/新建文件夹/IMG_3008.jpg';
import url15 from '../works/2016/imprint2016/新建文件夹/IMG_3019.jpg';
import url16 from '../works/2016/imprint2016/新建文件夹/IMG_3054.jpg';
import url17 from '../works/2016/imprint2016/新建文件夹/IMG_3055.jpg';
import url18 from '../works/2016/imprint2016/新建文件夹/IMG_3059.jpg';
import url19 from '../works/2016/imprint2016/新建文件夹/dream 78x108cm charcoal on paper 5.2015.jpg';
import url20 from '../works/2016/imprint2016/新建文件夹/stoner 20x14cm pencil on paper.4.2017.jpg';
import url21 from '../works/2016/imprint2016/新建文件夹/微信图片_20171231041455.jpg';
import url22 from '../works/2016/imprint2016/新建文件夹/微信图片_20171231110904.jpg';
import url23 from '../works/2016/Pickled cucumbers2016/21x28cm cosmetics,toner on plank 5.2017.jpg';
import url24 from '../works/2016/Pickled cucumbers2016/25x17cm toner,gel on paper 5.2017.jpg';
import url25 from '../works/2016/Pickled cucumbers2016/30x40cm oil painting on canvas 6.2017.jpg';
import url26 from '../works/2016/Pickled cucumbers2016/33x39cm oil painting on canvas 5.2017.jpg';
import url27 from '../works/2016/road2016/13x16cm  纸上色粉.jpg';
import url28 from '../works/2016/road2016/14x16cm 油画棒.jpg';
import url29 from '../works/2016/road2016/15x19cm 色粉.jpg';
import url30 from '../works/2016/road2016/16x15cm 色粉.jpg';
import url31 from '../works/2016/road2016/17x20cm 色粉 (2).jpg';
import url32 from '../works/2016/road2016/17x20cm 色粉.jpg';
import url33 from '../works/2016/road2016/20x14cm 色粉.jpg';
import url34 from '../works/2016/road2016/20x22cm 木板上油画.jpg';
import url35 from '../works/2017/brainman2017/IMG_2901.jpg';
import url36 from '../works/2017/brainman2017/IMG_2907.jpg';
import url37 from '../works/2017/brainman2017/brainman 10x3x1cm silver 11.2017.jpg';
import url38 from '../works/2017/brainman2017/brainman 1x1x0.7cm silver 11.2017.jpg';
import url39 from '../works/2017/brainman2017/brainman 6x0.7x0.5cm silver 11.2017.jpg';
import url40 from '../works/2017/brainman2017/brainman3x2x3.5cm silver11.2017.jpg';
import url41 from '../works/2017/brainman2017/那荣锟brainman 戒指 银3x2x3.5cm.jpg';
import url42 from '../works/2017/brainman2017/那荣锟brainman耳环 银 6x0.7x0.5cm（长款）.jpg';
import url43 from '../works/2017/brainman2017/新建文件夹/brainman.jpg';
import url44 from '../works/2017/brainman2017/新建文件夹/brainman2.jpg';
import url45 from '../works/2017/distance2017/29x26cm toner,charcoal.jpg';
import url46 from '../works/2017/distance2017/distance 60x70cm acrylic on canvas 5.2017.jpg';
import url47 from '../works/2017/distance2017/distanceII 120x130cm acrylic,gel on canvas 9.2017.jpg';
import url48 from '../works/2017/distance2017/distanceII60x70cm acrylic on canvas 9.2017.jpg';
import url49 from '../works/2017/distance2017/do not look back III60x70cm acrylic,gel on canvas 11.2017.jpg';
import url50 from '../works/2017/distance2017/time is elastic 30x30cm sliver,chinese lacquer on plank 10.2017.jpg';
import url51 from '../works/2017/distance2017/新建文件夹/14x19cm pencil on paper.jpg';
import url52 from '../works/2017/distance2017/新建文件夹/20x21cm pencil.jpg';
import url53 from '../works/2017/distance2017/新建文件夹/20x29cm pencil.jpg';
import url54 from '../works/2017/distance2017/新建文件夹/IMG_2985.jpg';
import url55 from '../works/2017/distance2017/新建文件夹/IMG_2987.jpg';
import url56 from '../works/2017/distance2017/新建文件夹/do not look back.jpg';
import url57 from '../works/2017/distance2017/新建文件夹/time is elastic30x30cm pencil on paper 10.2017.jpg';
import url58 from '../works/2017/Hand2017/IMG_20170423_200855.jpg';
import url59 from '../works/2017/Hand2017/IMG_20170424_001752_1492971803813.jpg';
import url60 from '../works/2017/Hand2017/IMG_20170424_001854_1492971803957.jpg';
import url61 from '../works/2017/Hand2017/IMG_20170424_003532_1492971805728.jpg';
import url62 from '../works/2017/Hand2017/IMG_20170424_004126.jpg';
import url63 from '../works/2017/Hand2017/IMG_20170424_013411_1492971809317.jpg';
import url64 from '../works/2017/Hand2017/IMG_20170427_222814.jpg';
import url65 from '../works/2017/Hand2017/IMG_20170427_225645.jpg';
import url66 from '../works/2017/Hand2017/mmexport1492952898184.jpg';
import url67 from '../works/2017/Hand2017/mmexport1492952981188.jpg';
import url68 from '../works/2017/Hand2017/mmexport1492952989856.jpg';
import url69 from '../works/2017/the surge of time2017/100x80cm acrylic on canvas 9.2017.jpg';
import url70 from '../works/2017/the surge of time2017/120x90cm acrylic,gesso,gel on canvas 9.2017.jpg';
import url71 from '../works/2017/the surge of time2017/70x90cm acrylic on canvas 12.2017.jpg';
import url72 from '../works/2017/the surge of time2017/新建文件夹/15x19Cm pencil on paper.jpg';
import url73 from '../works/2017/the surge of time2017/新建文件夹/17x13cm oil painting stick on paper.jpg';
import url74 from '../works/2017/the surge of time2017/新建文件夹/20x10cm oil painting on paper.jpg';
import url75 from '../works/2017/the surge of time2017/新建文件夹/26x20cm pencil.jpg';
import url76 from '../works/2017/the surge of time2017/新建文件夹/IMG_2991.jpg';
import url77 from '../works/2017/trap 6.7.2017/20x29cm acrylic on paper 7.2017.jpg';
import url78 from '../works/2017/trap 6.7.2017/20x29cm acrylic on paper 7.2017 (2).jpg';
import url79 from '../works/2017/trap 6.7.2017/33x40cm oil painting on canvas 5,2017.jpg';
import url80 from '../works/2017/trap 6.7.2017/40x33cm oil painting on canvas 5.2017.jpg';
import url81 from '../works/2017/trap 6.7.2017/56x40cm mixtechnical on paper 6.2017.jpg';
import url82 from '../works/2017/trap 6.7.2017/78x108cm acrylic,toner on paper 6.2017.jpg';
import url83 from '../works/2017/trap 6.7.2017/78x108cm toner,acrylic on paper 6.2017.jpg';
import url84 from '../works/2017/trap 6.7.2017/78x108cm toner,charcoal on paper 6.2017.jpg';
// import url69 from '../works/2017/trap 6.7.2017/';

export const omitInvalidValues = values => omitBy(values, value => (value === null || value === undefined));

export const CATEGORIES = [
    {
        title: '2016',
        children: [
            {
                name: 'eye 19x29cm pencil on paper 5.2015',
                children: [
                    {name: '', url: url1},
                    {name: '', url: url2},
                    {name: '', url: url3},
                    {name: '', url: url4},
                ]
            },
            {
                name: 'imprint2016',
                children: [
                    {name: '60x60cm wire on cystosepiment 12.2015', url: url5},
                    {name: '60x90cm wire,toner,acrylic on cystosepiment 11.2016', url: url6},
                    {name: '', url: url7},
                ],
                drafts: [
                    {name: '45x60cm wire,toner,acrylic  on cystosepiment 12.2017', url: url8},
                    {name: '778x108cm charcoal, toner on paper 4.2017', url: url9},
                    {name: '', url: url10},
                    {name: '', url: url11},
                    {name: '', url: url12},
                    {name: '', url: url13},
                    {name: '', url: url14},
                    {name: '', url: url15},
                    {name: '', url: url16},
                    {name: '', url: url17},
                    {name: '', url: url18},
                    {name: 'dream 78x108cm charcoal on paper 5.2015', url: url19},
                    {name: 'stoner 20x14cm pencil on paper.4.2017', url: url20},
                    {name: '', url: url21},
                    {name: '', url: url22},
                ]
            },
            {
                name: 'Pickled cucumbers2016',
                children: [
                    {name: '21x28cm cosmetics,toner on plank 5.2017', url: url23},
                    {name: '25x17cm toner,gel on paper 5.2017', url: url24},
                    {name: '30x40cm oil painting on canvas 6.2017', url: url25},
                    {name: '33x39cm oil painting on canvas 5.2017', url: url26},
                ]
            },
            {
                name: 'road2016',
                children: [
                    {name: '13x16cm  纸上色粉', url: url27},
                    {name: '14x16cm 油画棒', url: url28},
                    {name: '15x19cm 色粉', url: url29},
                    {name: '16x15cm 色粉', url: url30},
                    {name: '17x20cm 色粉 (2)', url: url31},
                    {name: '17x20cm 色粉', url: url32},
                    {name: '20x14cm 色粉', url: url33},
                    {name: '20x22cm 木板上油画', url: url34},
                ]
            },
        ],
    },
    {
        title: '2017',
        children: [
            {
                name: 'brainman2017',
                children: [
                    {name: '', url: url35},
                    {name: '', url: url36},
                    {name: 'brainman 10x3x1cm silver 11.2017', url: url37},
                    {name: 'brainman 1x1x0.7cm silver 11.2017', url: url38},
                    {name: 'brainman 6x0.7x0.5cm silver 11.2017', url: url39},
                    {name: 'brainman3x2x3.5cm silver11.2017', url: url40},
                    {name: '那荣锟brainman 戒指 银3x2x3.5cm', url: url41},
                    {name: '那荣锟brainman耳环 银 6x0.7x0.5cm（长款）', url: url42},
                ],
                drafts: [
                    {name: '', url: url43},
                    {name: '', url: url44}
                ]
            },
            {
                name: 'distance2017',
                children: [
                    {name: '29x26cm toner,charcoal', url: url45},
                    {name: 'distance 60x70cm acrylic on canvas 5.2017', url: url46},
                    {name: 'distanceII 120x130cm acrylic,gel on canvas 9.2017', url: url47},
                    {name: 'distanceII60x70cm acrylic on canvas 9.2017', url: url48},
                    {name: 'do not look back III60x70cm acrylic,gel on canvas 11.2017', url: url49},
                    {name: 'time is elastic 30x30cm sliver,chinese lacquer on plank 10.2017', url: url50},
                ],
                drafts: [
                    {name: '14x19cm pencil on paper', url: url51},
                    {name: '20x21cm pencil', url: url52},
                    {name: '20x29cm pencil', url: url53},
                    {name: '', url: url54},
                    {name: '', url: url55},
                    {name: 'do not look back', url: url56},
                    {name: 'time is elastic30x30cm pencil on paper 10.2017', url: url57},
                ]
            },
            {
                name: 'Hand2017',
                children: [
                    {name: '', url: url58},
                    {name: '', url: url59},
                    {name: '', url: url60},
                    {name: '', url: url61},
                    {name: '', url: url62},
                    {name: '', url: url63},
                    {name: '', url: url64},
                    {name: '', url: url65},
                    {name: '', url: url66},
                    {name: '', url: url67},
                    {name: '', url: url68},
                ]
            },
            {
                name: 'the surge of time2017',
                children: [
                    {name: '100x80cm acrylic on canvas 9.2017', url: url69},
                    {name: '120x90cm acrylic,gesso,gel on canvas 9.2017', url: url70},
                    {name: '70x90cm acrylic on canvas 12.2017', url: url71},
                ],
                drafts: [
                    {name: '15x19Cm pencil on paper', url: url72},
                    {name: '17x13cm oil painting stick on paper', url: url73},
                    {name: '20x10cm oil painting on paper', url: url74},
                    {name: '26x20cm pencil', url: url75},
                    {name: 'IMG_2991', url: url76},
                ]
            },
            {
                name: 'trap 6.7.2017',
                children: [
                    {name: '20x29cm acrylic on paper 7.2017', url: url77},
                    {name: '20x29cm acrylic on paper 7.2017 (2)', url: url78},
                    {name: '33x40cm oil painting on canvas 5,2017', url: url79},
                    {name: '40x33cm oil painting on canvas 5.2017', url: url80},
                    {name: '56x40cm mixtechnical on paper 6.2017', url: url81},
                    {name: '78x108cm acrylic,toner on paper 6.2017', url: url82},
                    {name: '78x108cm toner,acrylic on paper 6.2017', url: url83},
                    {name: '78x108cm toner,charcoal on paper 6.2017', url: url84},
                ]
            },
        ],
    },
    {
        title: '2018',
        children: [{name: '', url: ''}],
    },
    {
        title: '2019',
        children: [{name: '', url: ''}],
    },
];
