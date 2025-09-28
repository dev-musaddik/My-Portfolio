import { axiosInstance } from './axiosInstance';

// Blog API calls
export const createBlogPost = async (formData) => {
    try {
        const res = await axiosInstance.post('/blog', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Important for file uploads
            }
        });
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const updateBlogPost = async (id, formData) => {
    try {
        const res = await axiosInstance.put(`/blog/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Important for file uploads
            }
        });
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const deleteBlogPost = async (id) => {
    try {
        const res = await axiosInstance.delete(`/blog/${id}`);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

// Project API calls
export const createProject = async (formData) => {
    try {
        const res = await axiosInstance.post('/projects', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const updateProject = async (id, formData) => {
    try {
        const res = await axiosInstance.put(`/projects/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const deleteProject = async (id) => {
    try {
        const res = await axiosInstance.delete(`/projects/${id}`);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};


// Skill API calls
export const createSkill = async (skillData) => {
    try {
        const res = await axiosInstance.post('/skills', skillData);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const updateSkill = async (id, skillData) => {
    try {
        const res = await axiosInstance.put(`/skills/${id}`, skillData);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const deleteSkill = async (id) => {
    try {
        const res = await axiosInstance.delete(`/skills/${id}`);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};


// Portfolio API calls (example - adjust as per actual portfolio structure)
export const updatePortfolio = async (portfolioData) => {
    try {
        const res = await axiosInstance.put('/portfolio', portfolioData); // Assuming a PUT to /portfolio updates the main portfolio
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

// Daily Routine API calls (Admin only)
export const createOrUpdateDailyRoutine = async (dailyRoutineData) => {
    try {
        const res = await axiosInstance.post('/daily-routine', dailyRoutineData);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const deleteDailyRoutine = async (id) => {
    try {
        const res = await axiosInstance.delete(`/daily-routine/${id}`);
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};

export const updateProfileImage = async (formData) => {
    try {
        const res = await axiosInstance.put('/profile/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (err) {
        throw err.response.data;
    }
};


// You might need more specific portfolio update functions (e.g., addSkill, addProject)
// For now, this is a placeholder.