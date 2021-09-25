import React, { useState, useContext } from 'react';
import { reviewsContext, appContext } from '../../contexts/index.js';
import { toggleModal, handleSubmit, handleChange, handlePhotos, displayStarDescription, displayRatingDefinition } from './utils/RatingsAndReviews.utils.js';
import CharacteristicRadioButtons from './CharacteristicRadioButtons.jsx';

const AddReviewModal = () => {
  const {
    reviews, reviewsMeta, modalVisibility, setModalVisibility
  } = useContext(reviewsContext);
  const { product } = useContext(appContext);
  const [sizeRating, setSizeRating] = useState(0);
  const [widthRating, setWidthRating] = useState(0);
  const [lengthRating, setLengthRating] = useState(0);
  const [fitRating, setFitRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [summary, setSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState(null);
  const formData = {
    overallRating, sizeRating, widthRating, lengthRating,
    fitRating, qualityRating, comfortRating, recommend,
    summary, reviewBody, name, email, photos, reviewsMeta, product
  };

  if (reviews.length === 0) {
    return <div>loading reviews...</div>;
  }

  return (
    <div className="reviewModal" id="addReviewModal" style={{ 'visibility': modalVisibility }}>
      <button id="closeReviewModal" className="closeReviewModal" onClick={() => { toggleModal(modalVisibility, setModalVisibility); }}>X</button>
      <h2 id="addReviewTitle">Write your review</h2>
      <h3 id="addReviewSubtitle">About the {product.name}</h3>
      <span id="requiredNotice" className="notice">fields marked with * are required</span>
      <form id="addReview" className="addReview" onSubmit={handleSubmit} onChange={handleChange}>
        <div id="overallRating">
          <label> * Overall rating:</label>
          <input onChange={() => { setOverallRating(1); }} type="radio" value="1" checked={overallRating === 1}></input>
          <input onChange={() => { setOverallRating(2); }} type="radio" value="2" checked={overallRating === 2}></input>
          <input onChange={() => { setOverallRating(3); }} type="radio" value="3" checked={overallRating === 3}></input>
          <input onChange={() => { setOverallRating(4); }} type="radio" value="4" checked={overallRating === 4}></input>
          <input onChange={() => { setOverallRating(5); }} type="radio" value="5" checked={overallRating === 5}></input>
          <span>{displayStarDescription(overallRating)}</span>
        </div>
        <div id="recommend">
          <label> * Do you recommend this product?</label>
          <label> Yes</label>
          <input onChange={() => { setRecommend(true); }} type="radio" value="yes" checked={recommend === true}></input>
          <label> No</label>
          <input onChange={() => { setRecommend(false); }} type="radio" value="no" checked={recommend === false}></input>
        </div>
        <div id="characteristics">
          <div id="sizeCharacteristic">
            <CharacteristicRadioButtons rating={sizeRating} setRating={setSizeRating} labelName="Size" />
          </div>
          <div id="sizeRadioMeaning" className="radioMeaning"><span className="leftMeaning">Too small</span> <span className="rightMeaning">Too large</span></div>

          <div id="widthCharacteristic">
            <CharacteristicRadioButtons rating={widthRating} setRating={setWidthRating} labelName="Width" />
          </div>
          <div id="widthRadioMeaning" className="radioMeaning"><span className="leftMeaning">Too narrow</span> <span className="rightMeaning">Too wide</span></div>

          <div id="lengthCharacteristic">
            <CharacteristicRadioButtons rating={lengthRating} setRating={setLengthRating} labelName="Length" />
          </div>
          <div id="lengthRadioMeaning" className="radioMeaning"><span className="leftMeaning">Too short</span> <span className="rightMeaning">Too long</span></div>

          <div id="fitCharacteristic">
            <CharacteristicRadioButtons rating={fitRating} setRating={setFitRating} labelName="Fit" />
          </div>
          <div id="fitRadioMeaning" className="radioMeaning"><span className="leftMeaning">Too tight</span> <span className="rightMeaning">Too loose</span></div>

          <div id="qualityCharacteristic">
            <CharacteristicRadioButtons rating={qualityRating} setRating={setQualityRating} labelName="Quality" />
          </div>
          <div id="qualityRadioMeaning" className="radioMeaning"><span className="leftMeaning">Poor</span> <span className="rightMeaning">Perfect</span></div>

          <div id="comfortCharacteristic">
            <CharacteristicRadioButtons rating={comfortRating} setRating={setComfortRating} labelName="Comfort" />
          </div>
          <div id="comfortRadioMeaning" className="radioMeaning"><span className="leftMeaning">Uncomfortable</span> <span className="rightMeaning">Perfect</span></div>
        </div>
        <label id="reviewSummaryLabel" htmlFor="reviewSummary">Summary:
          <textarea
            type="textarea"
            min="1"
            max="60"
            rows={3}
            cols={45}
            name="reviewSummary"
            id="submitReviewSummary"
            onChange={() => { setSummary(document.getElementById('submitReviewSummary').value); }}
            value={summary}
            placeholder="ex: Best purchase ever"
          />
        </label>
        <label id="reviewBodyLabel" htmlFor="reviewBody">* Review body
          <textarea
            type="textarea"
            min="50"
            maxLength="1000"
            name="reviewBody"
            rows={5}
            cols={45}
            id="submitReviewBody"
            onChange={() => { setReviewBody(document.getElementById('submitReviewBody').value); }}
            value={reviewBody}
            placeholder="Why did you like the product, or why not?"
          />
        </label>
        <label id="reviewPhotosLabel" htmlFor="photos">Upload photos
          <input
            multiple
            type="file"
            name="reviewFiles"
            id="reviewFileInput"
            onChange={handlePhotos}
          />
        </label>
        <label id="reviewNicknameLabel" htmlFor="nickname">* what is your nickname
          <input
            type="text"
            min="3"
            max="60"
            name="nickname"
            id="nickname"
            onChange={() => { setName(document.getElementById('nickname').value); }}
            value={name}
            placeholder="ex: jackson11"
          />
        </label>
        <div id="reviewNicknameNotice" className="notice">For privacy reasons, do not use your full name or email address</div>
        <label id="reviewEmailLabel" htmlFor="email"> what is your email address?
          <input
            type="text"
            min="3"
            max="60"
            name="reviewEmail"
            id="reviewEmail"
            onChange={() => { setEmail(document.getElementById('reviewEmail').value); }}
            value={email}
            placeholder="ex: jackson11@email.com"
          />
        </label>
        <div id="reviewEmailNotice" className="notice">For authentication reasons, you will not be emailed</div>
        <button id="submitReviewButton" onClick={() => { handleSubmit(event, formData); }}>Submit review</button>
      </form>
    </div>
  );
};
export default AddReviewModal;

