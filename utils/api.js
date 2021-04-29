import AsyncStorage from "@react-native-async-storage/async-storage"

const DATA_STORAGE_KEY = 'dataStorage:entries'

const initialData = {
    React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
}

export async function getEntries() {
    try {
          const storeResults = await AsyncStorage.getItem(DATA_STORAGE_KEY);
          if (storeResults === null) {
            AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(storeResults));
            return initialData
          }
          return JSON.parse(storeResults)
      } catch (err) {
        console.log(err);
      }
  }
