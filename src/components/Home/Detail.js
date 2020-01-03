import {useCallback} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
// import {Collapse, Divider} from 'antd';
import {CATEGORIES} from '@/utils';
import {partial, get} from 'lodash';
import styles from './Detail.less';

const DetailIn = ({match, history}) => {
    const {params: {first, second}} = match;
    const firstCategory = CATEGORIES.find(item => item.title === first) || {};
    const secondCategory = get(firstCategory, `children[${second}]`, {});
    const {name, children} = secondCategory;

    const handleGoBack = useCallback(
        () => {
            history.push(`/work/${first}`);
        },
        []
    );

    return (
        <div className={styles.detail}>
            <div className={styles.header}>
                <a onClick={handleGoBack}>{first}</a>
                {' / '}
                <span>{name}</span>
            </div>
            <div className={styles.content}>
                {(children || []).map(item => (
                    <div key={item.url}>
                        <img src={item.url} />
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Detail = withRouter(DetailIn);

export default Detail;
