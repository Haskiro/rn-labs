import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MarketItem from "../components/MarketItem";
import {useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import {marketItemsMock} from "../mocks/marketItems.mock";
import {sortChipsLabels, sortItemsVariants} from "../utils/constants";
import SearchInput from "../components/SearchInput";


const initialMarketItemsState = {
    marketItems: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MARKET_ITEMS':
            return {
                ...state,
                marketItems: action.payload
            };
        case 'SEARCH_ITEM':
            const newMarketItemsList = action.payload ?
                marketItemsMock.filter(item => item.title.includes(action.payload)) :
                marketItemsMock;

            return {
                ...state,
                marketItems: newMarketItemsList
            }
        default:
            throw new Error();
    }
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialMarketItemsState)
    const [sort, setSort] = useState(sortItemsVariants.NONE);
    const [searchValue, setSearchValue] = useState('');

    const searchInputRef = useRef(null);
    const itemsClickCount = useRef(0);

    const handleItemClick = useCallback(() => {
        itemsClickCount.current += 1;
    }, [])

    useEffect(() => {
        //api call...
        dispatch({
            type: 'SET_MARKET_ITEMS',
            payload: marketItemsMock
        })
        searchInputRef.current.focus()
    }, [])

    const handleSort = (item) => () => {
        if (item === sort) {
            setSort(sortItemsVariants.NONE)
        } else {
            setSort(item)
        }
    }

    const onSearch = () => {
        dispatch({
            type: 'SEARCH_ITEM',
            payload: searchValue
        })
    }

    const filteredItems = useMemo(() => {
        if (sort === sortItemsVariants.MIN_PRICE) {
            return state.marketItems.slice(0).sort((a, b) => {
                return a.price - b.price
            })
        } else if (sort === sortItemsVariants.MAX_PRICE) {
            return state.marketItems.slice(0).sort((a, b) => {
                return b.price - a.price
            })
        }

        return state.marketItems;

    }, [sort, state.marketItems])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.title}>Главная</Text>
                <SearchInput
                    ref={searchInputRef}
                    value={searchValue}
                    onChangeSearchStr={setSearchValue}
                    onSearch={onSearch}
                />
                <Text style={styles.sortTitle}>Сортировка</Text>
                <FlatList data={sortChipsLabels}
                          renderItem={({item}) => <TouchableOpacity
                              onPress={handleSort(item)}
                              style={[styles.sortChip, sort === item && styles.sortChipActive]}
                              key={item}
                          ><Text style={sort === item ? {
                              color: 'white'
                          } : {}}>{item}</Text></TouchableOpacity>}
                          horizontal={true}
                          contentContainerStyle={{gap: 6}}

                />
                <ScrollView centerContent showsVerticalScrollIndicator={false} contentContainerStyle={{
                    rowGap: 16,
                    paddingHorizontal: 10
                }}
                >
                    {
                        filteredItems.map(el => (
                            <MarketItem
                                key={el.id}
                                title={el.title}
                                imageLocalPath={el.imagePath}
                                price={el.price}
                                onClick={handleItemClick}
                            />))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sortTitle: {
        fontSize: 20,
        marginBottom: 10
    },
    sortChip: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        minHeight: 35,
        marginBottom: 20
    },
    sortChipActive: {
        backgroundColor: '#123094'
    },
});

export default Home;