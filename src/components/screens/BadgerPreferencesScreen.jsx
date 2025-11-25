import { useContext, useEffect, useState } from 'react';
import { Text, View, Switch, ScrollView } from 'react-native';
import BadgerPreferencesContext from '../BadgerPreferencesContext';

function BadgerPreferencesScreen() {
    const [allTags, setAllTags] = useState([]);
    const { prefs, setPrefs } = useContext(BadgerPreferencesContext);

    // Fetch all tags from the API
    useEffect(() => {
        fetch('https://cs571api.cs.wisc.edu/rest/s25/hw8/articles', {
            headers: {
                "X-CS571-ID": "bid_bc69ed46c77aa7b48b9f05b514a9558c980d9921773473356ef62094c5746503"
            }
        })
        .then(res => res.json())
        .then(data => {
            const tagSet = new Set();
            data.forEach(article => article.tags.forEach(tag => tagSet.add(tag)));
            setAllTags(Array.from(tagSet));
        });
    }, []);

    // Initialize preferences with all tags set to true
    const handleToggle = (tag) => {
        setPrefs(prev => ({
            ...prev,
            [tag]: !(prev[tag] ?? true)  // default to true if undefined
        }));
    };

    return (
        <ScrollView style={{ padding: 10 }}>
            {/* Header */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Preferences</Text>
            
            {/* Description */}
            {allTags.map(tag => {
                const isOn = prefs[tag] ?? true; // default to true if undefined
                return (
                    <View key={tag} style={{ marginVertical: 10, padding: 10, borderRadius: 8, backgroundColor: '#fff', elevation: 2 }}>
                        <Text>
                            Currently {isOn ? "showing" : "NOT showing"} <Text style={{ fontWeight: 'bold' }}>{tag}</Text> articles.
                        </Text>
                        <Switch value={isOn} onValueChange={() => handleToggle(tag)} />
                    </View>
                );
            })}
        </ScrollView>
    );
}

export default BadgerPreferencesScreen;
