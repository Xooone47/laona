import {useCallback} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Collapse, Divider} from 'antd';
import {partial} from 'lodash';
import {CATEGORIES} from '@/utils';
import Detail from './Detail';
import styles from './index.less';

const {Panel} = Collapse;

const Header = ({text}) => {
    return (
        <Divider>{text}</Divider>
    );
};

const SubCategoriesIn = ({list, history, location, match}) => {
    const {pathname} = location;
    const {params: {first}} = match;

    const handleClick = useCallback(
        value => {
            const target = `/work/${first}/${value}`;
            history.push(target);

        },
        [history, pathname]
    );

    const categories = list.map(item => item.name);

    return (
        <div className={styles['sub-categories']}>
            {categories.map((item, index) => (
                <div className={styles.item} onClick={partial(handleClick, index)} key={item}>
                    {item}
                </div>
            ))}
        </div>
    );
};

const SubCategories = withRouter(SubCategoriesIn);

const MenuIn = ({history, match}) => {
    const {params: {first}} = match;

    const handleChange = useCallback(
        key => {
            history.push(`/work/${key}`);
        },
        []
    );

    return (
        <div className={styles.work}>
            <Collapse
                accordion
                bordered={false}
                defaultActiveKey={[first || '1']}
                className={styles.collapse}
                expandIcon={null}
                onChange={handleChange}
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
    )
}

const Menu = withRouter(MenuIn);

const Work = () => {
    return (
        <Switch>
            <Route exact path="/work/:first?" component={Menu} />
            <Route exact path="/work/:first/:second" component={Detail} />
        </Switch>
    );
};

export default Work;
