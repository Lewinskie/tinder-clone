import React from "react";
import "./swipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtonsRepeat bottomIcons">
        <ReplayIcon />
      </IconButton>
      <IconButton className="swipeButtonsLeft bottomIcons ">
        <CloseIcon />
      </IconButton>
      <IconButton className="swipeButtonsStar bottomIcons ">
        <StarRateIcon />
      </IconButton>
      <IconButton className="swipeButtonsRight  bottomIcons">
        <FavouriteIcon />
      </IconButton>
      <IconButton className="swipeButtonsLightning bottomIcons ">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
