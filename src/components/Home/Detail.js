import {useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import {CATEGORIES} from '@/utils';
import {get, isEmpty, slice, split} from 'lodash';
import Introduction from './Introduction';
import styles from './Detail.less';

const getDisplayName = nameString => {
    console.log(split(nameString, '_'));
    const fragments = split(nameString, '_');
    if (fragments.length === 1) {
        return fragments.join('');
    } else if (fragments.length > 1) {
        return slice(fragments, 0, -1).join('');
    } else {
        return '';
    }
};

const Item = ({name, url}) => {
    const displayName = getDisplayName(name);
    return (
        <div key={url} className={styles.item}>
            <img src={url} />
            {displayName && <div className={styles.title}>{getDisplayName(name) || ''}</div>}
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
                <Introduction name={name} />


                {(children || []).map(item => <Item {...item} key={item.url} />)}

                {!isEmpty(drafts) && (
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
