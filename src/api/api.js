import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "293a2fcd-d0f5-4df9-bc78-ab2b32ac1ce2"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    }
};