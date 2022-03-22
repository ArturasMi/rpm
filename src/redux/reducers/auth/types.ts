export type UserInterface = UserSuccessInterface | UserDefaultInterface;

interface UserSuccessInterface {
  uid: string;
  email: string;
  emailVerified: boolean;
}

interface UserDefaultInterface {
  error: string | null;
}

export enum AuthActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED',
  LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED',
}

export type AuthFormType = {
  email: string;
  password: string;
};

export type UserProfileType = {
  car_make: string;
  car_model: string;
  deviceId: string;
  image: string;
  kw: string;
  lastname: string;
  lastupdate: number;
  latitude: number;
  longitude: number;
  name: string;
  number_plate: string;
};
