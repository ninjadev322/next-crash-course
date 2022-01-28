import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2;
    return (
        <div>
            <h1><span className='title'>WebDev</span>News</h1>
            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'};
                    }
                `}
            </style>
        </div>
        );
};


export default Header;