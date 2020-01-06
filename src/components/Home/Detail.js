import {useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import {CATEGORIES} from '@/utils';
import {get} from 'lodash';
import styles from './Detail.less';

const Item = ({name, url}) => {
    return (
        <div key={url} className={styles.item}>
            <img src={url} />
            {name && <div className={styles.title}>{name}</div>}
        </div>
    );
};

const DetailIn = ({match, history}) => {
    const {params: {first, second}} = match;
    const firstCategory = CATEGORIES.find(item => item.title === first) || {};
    const secondCategory = get(firstCategory, `children[${second}]`, {});
    const {name, children, drafts} = secondCategory;

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
                {(children || []).map(item => <Item {...item} key={item.url} />)}

                {drafts && (
                    <div className={styles.more}>
                        <Divider>More details</Divider>
                        {drafts.map(item => <Item {...item} key={item.url} />)}
                    </div>
                )}
            </div>
        </div>
    );
};

const Detail = withRouter(DetailIn);

export default Detail;
