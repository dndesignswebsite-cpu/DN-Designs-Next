import React from 'react';
import "./LPPageNewMidForm.css"
import ActualFormLPMid from './ActualFormLPMid';

const LPPageNewMidForm = () => {
    return (
        <div className='lp-new-mid-form-section'>
            <div className='container'>
                <div className='lp-new-mid-form'>
                    <div className='row'>
                       
                        <div className='col'>
                        <div className='lp-new-mid-form-col-content'>
                            <h2 className='lp-new-mid-form-col-head'>Is Your Business Ready to <span className='lp-new-mid-form-col-head-span'>Build or Reposition Its Brand?</span></h2>
                            <p className='lp-new-mid-form-col-para'>We work with:</p>

                            <div className='lp-new-mid-form-col-list-item-div'>
                                <img src="https://dndesigns.co.in/uploads/pages/chatbotnewiconwithfixes.svg" className='img-fluid lp-new-mid-form-col-list-item-image'></img>
                            <p className='lp-new-mid-form-col-list-item'>Startups launching new brands</p>
                            </div>

                           <div className='lp-new-mid-form-col-list-item-div'>
                                <img src="https://dndesigns.co.in/uploads/pages/chatbotnewiconwithfixes.svg" className='img-fluid lp-new-mid-form-col-list-item-image'></img>
                            <p className='lp-new-mid-form-col-list-item'>Established businesses refreshing their identity</p>
                            </div>

                          <div className='lp-new-mid-form-col-list-item-div'>
                                <img src="https://dndesigns.co.in/uploads/pages/chatbotnewiconwithfixes.svg" className='img-fluid lp-new-mid-form-col-list-item-image'></img>
                            <p className='lp-new-mid-form-col-list-item'>D2C/FMCG brands entering competitive categories</p>
                            </div>

                          <div className='lp-new-mid-form-col-list-item-div'>
                                <img src="https://dndesigns.co.in/uploads/pages/chatbotnewiconwithfixes.svg" className='img-fluid lp-new-mid-form-col-list-item-image'></img>
                            <p className='lp-new-mid-form-col-list-item'>Companies undergoing rebranding</p>
                            </div>

                            <div className='lp-new-mid-form-col-list-item-div'>
                                <img src="https://dndesigns.co.in/uploads/pages/chatbotnewiconwithfixes.svg" className='img-fluid lp-new-mid-form-col-list-item-image'></img>
                            <p className='lp-new-mid-form-col-list-item'>Businesses looking for a complete brand strategy</p>
                            </div>

                        </div>
                        </div>

                        <div className='col'>
                            {/* actual form  */}
                            <ActualFormLPMid/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LPPageNewMidForm;
