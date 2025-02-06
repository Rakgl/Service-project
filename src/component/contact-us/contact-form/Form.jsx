import React from 'react';
import './form.scss';
import Button from '../../button/Button';

const Form = () => {    
    return (
        <>
            <div className='form px-10'>
                <h1 className='text-center'><b>Have Any Question? Let Answer Them</b></h1>
                <form action="" className='mt-4 mb-5'>
                    <div className='row custom-gap'>
                        <div className='col-md-6 col-sm-12'>
                            <label><b>Name <span>*</span></b></label>
                            <input type="text" className="form-control mt-2"/>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <label><b>Email <span>*</span></b></label>
                            <input type="text" className="form-control mt-2"/>
                        </div>
                        <div className='col-12'>
                            <label><b>Subject <span>*</span></b></label>
                            <input type="text" className="form-control mt-2"/>
                        </div>
                        <div className='col-12'>
                            <label><b>Your Message <span>*</span></b></label>
                            <textarea className="form-control big-form mt-2" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </form>
                    <Button>Sent Your Message</Button>
            </div>
        </>
    );
  };

export default Form;