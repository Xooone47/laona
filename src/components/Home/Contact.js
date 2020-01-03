import styles from './index.less';

const Label = ({children}) => <span className={styles.label}>{children}</span>;

const Contact = () => {
    return (
        <div className={styles.contact}>
            <p><Label>Email:</Label>872380454@qq.com</p>
            <p><Label>Tel:</Label>86-17888825891</p>
            <p><Label>Instagram:</Label>narongkun501</p>
            <p><Label>Wechat:</Label>yooooolaonana</p>
        </div>
    );
};

export default Contact;
