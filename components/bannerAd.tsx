import { View, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default function AppBannerAd() {
    const bannerAdUnitId = TestIds.BANNER || 'ca-app-pub-2107256352390559/3857350182';

    return (
        <View style={styles.container}>
            <BannerAd
                unitId={bannerAdUnitId}
                size={BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true, // required for kids apps
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF9F0',
        paddingVertical: 4,
    },
});