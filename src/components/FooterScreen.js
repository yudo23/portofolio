const App = () => {
    return (
        <>
            <div className="container footer">
                <div className='row'>
                    <div className='col-lg-10 footer-left'>
                        <p className='footer-title'>Thank You For Visiting</p>
                        <p className='footer-text'>Web Developer</p>
                        <p className='footer-copyright'>
                            ©{new Date().getFullYear()} Yudo Dendy Andriansyah
                        </p>
                    </div>
                    <div className='col-lg-2 footer-right'>
                        <p className="footer-title">Follow Me</p>
                        <div className='footer-icon-container'>
                            <a href='https://api.whatsapp.com/send/?phone=6289506383344&text&app_absent=0' className='footer-icon whatsapp' target="_blank">
                            <i className='fa fa-whatsapp'></i>
                            </a>
                            <a href='https://www.instagram.com/youu.do' className='footer-icon instagram' target="_blank">
                            <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://t.me/yudo_23' className='footer-icon telegram' target="_blank">
                            <i className='fa fa-telegram'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;