const baseUrl = "https://rotaryclubkathmandumid-town.org/admin/wp-json/wp/v2/";
import axios from "axios";

class APIService {
    getEvents() {
        return axios.get(baseUrl + 'events');
    }

    getSlider() {
        return axios.get(baseUrl + 'slider');
    }

    getMonths() {
        return axios.get(baseUrl + 'designated_months?per_page=100');
    }

    getNews() {
        return axios.get(baseUrl + 'news');
    }
    getNewsById(id) {
        return axios.get(baseUrl + 'news/' + id);
    }

    getVideos() {
        return axios.get(baseUrl + 'videos');
    }

    sendContactUs(data) {
        return axios.post("https://rotaryclubkathmandumid-town.org/admin/wp-json/contact-form-7/v1/contact-forms/127/feedback", data, {

            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

    }

}

export default APIService