import React from 'react';

const Footer = () => {
    return (
        <div>
            <div id="contact" className=" col-md-10 offset-md-1" data-Aos="zoom-in-right">
                <h2 className="font-weight-bold mt-5 pt-5 mb-5" style={{ fontSize: '50px', color: '#7ee9db' }}>Contact</h2>
                <div className="container">
                    <form>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email Address" />
                        </div>
                        <div class="form-group ">
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Name/Company Name" />
                        </div>
                        <div>
                            <form>
                                <textarea placeholder="Your Message.."></textarea>
                            </form>
                        </div>
                        <div>
                            <a href="" style={{ backgroundColor: '#7ee9db' }} class="btn">Send</a>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default Footer;