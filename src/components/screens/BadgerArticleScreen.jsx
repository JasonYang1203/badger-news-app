import { useEffect, useState, useRef } from 'react';
import { Text, View, ScrollView, Animated, Image, Linking, Pressable } from 'react-native';

function BadgerArticleScreen({ route }) {
    const { articleId } = route.params;
    const [article, setArticle] = useState(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Fetch the article data from the API when the component mounts
    useEffect(() => {
        fetch(`https://cs571api.cs.wisc.edu/rest/s25/hw8/article?id=${articleId}`, {
            headers: {
                "X-CS571-ID": "bid_bc69ed46c77aa7b48b9f05b514a9558c980d9921773473356ef62094c5746503"
            }
        })
        .then(res => res.json())
        .then(data => {
            setArticle(data);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        });
    }, []);

    // Check if the article is null or undefined
    if (!article) {
        return (
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 16 }}>Please wait while your article loads...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <Image
                source={{
                    uri: `https://raw.githubusercontent.com/CS571-S25/hw8-api-static-content/main/${article.img}`
                }}
                style={{ width: '100%', height: 220 }}
                resizeMode="cover"
            />

            <View style={{ padding: 15 }}>
                {/* Display the article's title, author, and date */}
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                    {article.title}
                </Text>

                {/* Display the article's subtitle */}
                <Text style={{ marginBottom: 5, color: 'gray' }}>
                    By {article.author} on {article.posted}
                </Text>

                {/* Display the article's link */}
                <Pressable onPress={() => Linking.openURL(article.url)}>
                    <Text style={{ color: '#1E90FF', marginBottom: 15 }}>
                        Read full article here.
                    </Text>
                </Pressable>

                {/* Display the article's body */}
                <Animated.View style={{ opacity: fadeAnim }}>
                    {article.body.map((para, i) => (
                        <Text key={i} style={{ marginBottom: 12, lineHeight: 22 }}>
                            {para}
                        </Text>
                    ))}
                </Animated.View>
            </View>
        </ScrollView>
    );
}

export default BadgerArticleScreen;
