import React, { useState } from 'react';
import debitCardLogo from "../../images/debitCardLogo.png";
import chipImage from "../../images/chip.png";
import backgroundImage from "../../images/background.jpg";
import BackFlipingComponent from './BackFlipingComponent';

const FlippingCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlipping = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <>
      <img
        src={backgroundImage}
        alt="error-backgroundImage"
        className='backgroundImage absolute bg-no-repeat bg-contain opacity-50 h-screen min-w-[100vw]'
      />
      <div
        className='min-w-[100vw] h-screen flex justify-center items-center'
      >
        <div
          className={`${flipped ? 'transform rotate-y-180' : 'transform rotate-y-0'
          } mainCard h-80 sm:h-72 min-w-[350px] sm:min-w-[490px] shadow-md text-white relative z-50 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 transition-transform  cursor-pointer`}
          onMouseEnter={handleFlipping}
          onMouseLeave={handleFlipping}
        >
          {flipped ? (
            <BackFlipingComponent />
          ) : (
            <div className='showHideDiv'>
              <div className="topCarddiv flex items-center mt-7 w-full justify-between px-6">
                <div className="imgTextLeft flex items-center gap-2">
                  <img
                    src={debitCardLogo}
                    alt="error-debitCardLogo"
                    className='debitCardLogo h-9'
                  />
                  <span className='text-lg'>Master Card</span>
                </div>
                <div className="imgRight">
                  <img
                    src={chipImage}
                    alt="error-chipImage"
                    className='chipImage h-16'
                  />
                </div>
              </div>

              <div className="cardNumber flex flex-col px-8 mt-6">
                <span className='carNumberHeading text-base '>Card Number</span>
                <span>1234 5678 8901</span>
              </div>

              <div className="cardHolder px-8 flex justify-between items-center mt-6 ">
                <div className="leftDiv ">
                  <span className="cardHolderName text-lg">Santosh Kumar Bharti</span>
                </div>

                <div className="rightDiv flex flex-col -mb-5">
                  <span className="vaildText text-sm">Valid Till</span>
                  <span className="dateMonth text-lg">08/11</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FlippingCard;
