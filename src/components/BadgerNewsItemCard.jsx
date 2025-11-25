import { Card, Title } from 'react-native-paper';
import { Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BadgerNewsItemCard({ article }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Article', { articleId: article.fullArticleId })}>
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Image
                        source={{
                            uri: `https://raw.githubusercontent.com/CS571-S25/hw8-api-static-content/main/${article.img}`
                        }}
                        style={{ width: '100%', height: 200, borderRadius: 10 }}
                        resizeMode="cover"
                    />
                    <Title style={{ marginTop: 10 }}>{article.title}</Title>
                </Card.Content>
            </Card>
        </TouchableOpacity>   
    );
}

export default BadgerNewsItemCard;