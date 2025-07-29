import requests from "@/api/request.js";

export let reportTypeList = (data) => {
    return requests.get(`/api/officialWebsite/reportTypeListPC?${new URLSearchParams(data)}`)
}
