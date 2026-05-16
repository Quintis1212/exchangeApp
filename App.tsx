import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ICONS } from "./src/constants";
import { BaseCurrencyProvider } from "./src/context/BaseCurrencyContext";
import CardsScreen from "./src/screens/CardsScreen";
import ExchangeScreen from "./src/screens/ExchangeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import RatesScreen from "./src/screens/RatesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { colors } from "./src/theme/theme";
import { TabParamList } from "./src/types";

const Tab = createBottomTabNavigator<TabParamList>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BaseCurrencyProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    name={ICONS[route.name]}
                    size={size}
                    color={color}
                  />
                ),
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                  backgroundColor: colors.surface,
                  borderTopColor: colors.border,
                },
                headerStyle: { backgroundColor: colors.surface },
                headerTintColor: colors.textPrimary,
                headerTitleStyle: { fontWeight: "700" },
              })}
            >
              <Tab.Screen name="Rates" component={RatesScreen} />
              <Tab.Screen name="Exchange" component={ExchangeScreen} />
              <Tab.Screen name="History" component={HistoryScreen} />
              <Tab.Screen name="Cards" component={CardsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </BaseCurrencyProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
