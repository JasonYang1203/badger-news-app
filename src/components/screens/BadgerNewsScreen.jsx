import { Text, View, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import BadgerNewsItemCard from "../BadgerNewsItemCard";
import BadgerPreferencesContext from "../BadgerPreferencesContext";


function BadgerNewsScreen() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { prefs } = useContext(BadgerPreferencesContext);

    // Fetch the articles from the API when the component mounts
    useEffect(() => {
        fetch('https://cs571api.cs.wisc.edu/rest/s25/hw8/articles', {
            headers: {
                "X-CS571-ID": "bid_bc69ed46c77aa7b48b9f05b514a9558c980d9921773473356ef62094c5746503"
            }
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data);
            setLoading(false);
        });
    }, []);

    // Function to check if an article is visible based on user preferences
    const isVisible = article => {
        return article.tags.every(tag => prefs[tag] ?? true);
    };

    const visibleArticles = articles.filter(isVisible);

    return (
        <ScrollView>
            {/* Display the header */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Articles</Text>
            
            {/* Display the loading message */}
            {loading && <Text style={{ margin: 10 }}>Loading articles...</Text>}
            
            {/* Display a message if there are no articles that fit the user's preferences */}
            {!loading && visibleArticles.length === 0 && (
                <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ fontSize: 16 }}>There are no articles that fit your preferences!</Text>
                </View>
            )}

            {/* Map through the articles and display them */}
            {visibleArticles.map(article => (
                <BadgerNewsItemCard key={article.id} article={article} />
            ))}
        </ScrollView>
    );
}

export default BadgerNewsScreen;