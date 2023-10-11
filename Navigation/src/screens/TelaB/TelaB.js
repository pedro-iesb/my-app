import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import Api, { PostsApi } from '../../services/Api';

const TelaB = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await Api.get('/posts'); // Correção no endpoint
        setPosts(response.data.posts || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer} key={item.id}>
              <Text style={styles.postInfo}>{`Title: ${item.title}`}</Text>
              <Text style={styles.postInfo}>{`Body: ${item.body}`}</Text>
              <Divider />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black', // Background preto
  },
  postContainer: {
    marginBottom: 10,
  },
  postInfo: {
    marginBottom: 5,
    color: 'white', // Texto em branco
  },
  loadingText: {
    color: 'white', // Texto em branco
  },
});

export default TelaB;
