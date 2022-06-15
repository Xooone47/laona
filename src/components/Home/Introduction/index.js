import {introductions} from './introductions';
import styles from './index.less';

const getCurrentContent = name => {
    const target = introductions.find(item => item.name === name);
    return target ? target.content : '';
};

const Introduction = ({name}) => {
    if (!name) {
        return null;
    }

    const content = getCurrentContent(name);

    if (!content) {
        return null;
    }

    return (
        <div className={styles.root}>{content}</div>
    );
};

export default Introduction;
