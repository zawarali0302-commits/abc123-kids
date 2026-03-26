import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL || 'ca-app-pub-2107256352390559/2101682280', {
  requestNonPersonalizedAdsOnly: true, // required for kids apps (COPPA)
});

let isLoaded = false;

interstitial.addAdEventListener(AdEventType.LOADED, () => {
  isLoaded = true;
});

interstitial.addAdEventListener(AdEventType.CLOSED, () => {
  isLoaded = false;
  interstitial.load(); // preload next one immediately
});

export function preloadInterstitial() {
  interstitial.load();
}

export function showInterstitialIfReady() {
  if (isLoaded) {
    interstitial.show();
  }
}