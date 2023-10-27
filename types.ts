import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SelectGrade: undefined;
  SelectProvince: undefined;
};

export type TabsStackParamList = {
  Explore: undefined;
  Stream: undefined;
  Classwork: undefined;
};

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: {
    id: string;
  };
  Auth: any;
};

export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<'TabsStack'>
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type Teacher = {
  name: string;
  subject: string;
  image: any;
};

// Type for institution data
export type Institution = {
  name: string;
  field: string;
  description: string;
  rating: string;
  reviews: string;
  image: any;
};

// Type for welcome screen data
export type WelcomeScreenData = {
  title: string;
  subtitle: string;
};

// Type for grades data
export type GradesData = string[];

// Type for provinces data
export type ProvincesData = string[];

// Type for area filters and subject filters
export type AreaFilter = string[];
export type SubjectFilter = string[];
