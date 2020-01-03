import {useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import {get} from 'lodash';
import {Tabs} from 'antd';
import Contact from './Contact';
import Work from './Work';
import {Words, News} from './Words';
import styles from './index.less';

const {TabPane} = Tabs;

const logo = (
    <div className={styles.logo}>
        <div className={styles.text}>Na-rongkun</div>
    </div>
);

const ContentLayout = ({children}) => {
    return (
        <div className={styles['content-layout']}>
            {children}
        </div>
    );
};

const Pane = ({children, ...props}) => {
    return (
        <TabPane className={styles['tab-pane']} {...props}>
            <ContentLayout>{children}</ContentLayout>
        </TabPane>
    );
};

const PATHNAME_TO_KEY = {
    'work': 'work',
    'news': 'news',
    'words': 'words',
    'contact': 'contact'
};

const Home = ({location, history}) => {
    const {pathname} = location;
    const primaryPath = PATHNAME_TO_KEY[get(pathname.split('/'), '[1]')] || 'work';

    const handleTabChange = useCallback(
        key => {
            history.push(`/${key}`);
        },
        []
    );

    return (
        <div>
            {logo}
            <Tabs activeKey={primaryPath} onChange={handleTabChange} className={styles.tabs}>
                <Pane tab="Work" key="work">
                    <Work />
                </Pane>
                <Pane tab="News" key="news">
                    <News />
                </Pane>
                <Pane tab="Words" key="words">
                    <Words />
                </Pane>
                <Pane tab="Contact" key="contact">
                    <Contact />
                </Pane>
            </Tabs>
        </div>
    );
};

export default withRouter(Home);
