export interface Friend {
    // Use the exact same names in the todoForm you created, easier this way.
    name: string;
    email: string;
    phone: string;
    dob: string;
    isFriend: boolean;
}

export const NO_FRIEND: Friend = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    isFriend: true
  }