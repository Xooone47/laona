import {Collapse, Divider} from 'antd';
import styles from './index.less';

const {Panel} = Collapse;

const text = 'sometexts';

const CATEGORIES = [
    {
        title: 'Painting',
        children: [
            'Anonymous diary2018',
            'The surge of time2017',
            'Do not look back2017',
            'Distance2017',
            'Pickled cucumbers2017',
            'Trap2017',
            'Road2016',
            'Life drawing',
        ],
    },
    {
        title: 'Sketch',
        children: [
            'Dream',
            'He doesn\'t know',
            'Draft',
        ],
    },
    {
        title: 'Others',
        children: [
            'Brainman',
            'Imprint',
        ],
    },
];

const Header = ({text}) => {
    return (
        // <div className={styles.header}>{text}</div>
        <Divider>{text}</Divider>
    );
};

const SubCategories = ({list}) => {
    return (
        <div className={styles['sub-categories']}>
            {list.map(item => (
                <div className={styles.item}>{item}</div>
            ))}
        </div>
    );
};

const Work = () => {
    return (
        <div className={styles.work}>
            <Collapse
                accordion
                bordered={false}
                defaultActiveKey={['1']}
                className={styles.collapse}
                // expandIconPosition="right"
                expandIcon={null}
            >
                {
                    CATEGORIES.map(item => (
                        <Panel header={<Header text={item.title} />} key={item.title}>
                            <SubCategories list={item.children} />
                        </Panel>
                    ))
                }
            </Collapse>
        </div>
    );
};

export default Work;
