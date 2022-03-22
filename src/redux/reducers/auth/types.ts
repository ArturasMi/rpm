export type UserInterface = UserSuccessInterface | UserDefaultInterface;

interface UserSuccessInterface {
  uid: string;
  email: string;
  emailVerified: boolean;
  profile?: UserProfileType;
  error: string | null;
}

interface UserDefaultInterface {
  uid: null;
  profile?: UserProfileType;
  error: string | null;
}

export enum AuthActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED',
  LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED',
  USER_PROFILE = 'USER_PROFILE',
  USER_PROFILE_FULFILLED = 'USER_PROFILE_FULFILLED',
  USER_PROFILE_REJECTED = 'USER_PROFILE_REJECTED',
  USER_CREATE_PROFILE = 'USER_CREATE_PROFILE',
  USER_CREATE_PROFILE_FULFILLED = 'USER_CREATE_PROFILE_FULFILLED',
  USER_CREATE_PROFILE_REJECTED = 'USER_CREATE_PROFILE_REJECTED',
  LOGOUT = 'LOGOUT',
  LOGOUT_FULFILLED = 'LOGOUT_FULFILLED',
  LOGOUT_REJECTED = 'LOGOUT_REJECTED',
}

export type AuthFormType = {
  email: string;
  password: string;
};

export type UserProfileType = {
  car_make: string;
  car_model: string;
  deviceId?: string;
  image: string;
  kw: string;
  lastname: string;
  lastupdate?: number;
  latitude?: number;
  longitude?: number;
  name: string;
  number_plate: string;
  completed?: boolean;
};
