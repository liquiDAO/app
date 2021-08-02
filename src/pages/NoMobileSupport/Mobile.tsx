import React from 'react';

const Mobile: React.FC = () => {
  return (
    <div className="isMobile">
      <div className="redirect_user" style={{ color: 'white' }}>
        Mobile device is not supported, trying viewing the page in a desktop or
        tablet
      </div>
      <h2 style={{ color: 'white' }}>Download The Mobile App</h2>
      <div className="download_btn">
        <a
          href="https://apps.apple.com/us/app/truedex-trading-unleashed/id1545948177?itsct=apps_box_badge&amp;itscg=30200"
          style={{
            display: 'inline-block',
            borderRadius: '13px',
            width: '190px',
            height: '83px',
          }}
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1626134400&h=77bc190509853802f6b1fa53f16bec51"
            alt="Download on the App Store"
            style={{ borderRadius: '13px', width: '190px', height: '83px' }}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=io.sevenlabs.app&hl=it&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            alt="Get it on Google Play"
            width="190px"
            height="85px"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Mobile;
