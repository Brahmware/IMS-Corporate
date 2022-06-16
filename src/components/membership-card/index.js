import React, {useState} from 'react';
import { Button } from 'reactstrap';

const MembershipCard = (props) => {
  const [formData, setformData] = useState({"name": "", "email": "", "crewStrength": "", "region": ""});

  const title=props.cardData[0].title;
  const inputNameField=(props.cardData[0].inputfield[0]);
  const inputEmailField=(props.cardData[0].inputfield[1]);
  const inputCrewStrength=(props.cardData[0].optionfield[0]);
  const inputRegion=(props.cardData[0].optionfield[1]);
  const buttonText=props.cardData[0].buttontext;
  const actionTitle=props.cardData[1].title;
  const buttons=props.cardData[1].buttons;
  return (
    <React.Fragment>
        <div className="row row-cols-1 row-cols-lg-2 g-5 membership-card-row">
            <div className="col membership-card-column">
                <div className=" membership-card-form"
                    data-aos={!props.inverse ? 'fade-right' : 'fade-left'}
                    data-aos-duration='600'
                    data-aos-delay='300'
                >
                    <div className='form-header'>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: title
                            }}
                        />
                    </div>
                    <form className='form-body'>
                        <div className="mb-3">
                            <input 
                                value={formData.name} 
                                className="w-100 input-field fst-italic" 
                                type={inputNameField.type} 
                                placeholder={inputNameField.label} 
                                name={inputNameField.id} 
                                onChange={(e) => {setformData({...formData, "name": e.target.value})}}
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                value={formData.email}
                                className="w-100 input-field fst-italic" 
                                type={inputEmailField.type} 
                                placeholder={inputEmailField.label} 
                                name={inputEmailField.id} 
                                onChange={(e) => setformData({...formData , email: e.target.value})}
                            />
                        </div>
                        <div className="mb-3 d-flex">
                            <select 
                                value={formData.crewStrength} 
                                onChange={(e) => setformData({...formData, "crewStrength": e.target.value})} 
                                className="input-field w-50 me-3" 
                                id="crew-strength" 
                                name="crew-strength"
                            >
                                {
                                    inputCrewStrength.option.map((option, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                {
                                                    index===0 ?
                                                    (<option value={option} hidden>{option}</option>):
                                                    (<option value={option}>{option}</option>)
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </select>
                            <select 
                                value={formData.region}
                                onChange={(e) => setformData({...formData, "region" : e.target.value})}
                                className="input-field w-50 ms-3" 
                                id="region" 
                                name="region"
                            >
                                {
                                    inputRegion.option.map((option, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                {
                                                    index===0 ?
                                                    (<option value={option} hidden>{option}</option>):
                                                    (<option value={option}>{option}</option>)
                                                }
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <Button 
                            className='form-body-button' 
                            type='submit' 
                            color="btn btn-outline-primary"
                            >
                            {buttonText}
                        </Button>
                    </form>
                </div>
            </div>
            <div className="col membership-card-column">
                <div className="membership-card-action h-100"
                    data-aos={props.inverse ? 'fade-right' : 'fade-left'}
                    data-aos-duration='800'
                    data-aos-delay='300'
                >
                    <div className="membership-card-action-border">
                        <div className='action-header text-center'>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: actionTitle
                                }}
                            />
                        </div>
                        <div className="action-body d-flex flex-column">
                                {
                                    buttons.map((button, index) => {
                                        return (
                                            <Button 
                                                className='action-body-button mb-4' 
                                                key={index}
                                                color="btn btn-outline-primary" 
                                                >
                                                {button.text}
                                            </Button>
                                        )
                                    })      
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MembershipCard;