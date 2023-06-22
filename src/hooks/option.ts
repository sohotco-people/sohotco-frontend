import { useState } from "react"
import { fetchGet } from "util/fetch"

export const useOption = () => {
    const [selected, setSelected] = useState<any[]>([])
    const [position, setPosition] = useState([])
    const [location, setLocation] = useState([])
    const [experience, setExperience] = useState([])
    const [meetingSystem, setMeetingSystem] = useState([])
    const [week, setWeek] = useState([])
    const [meetingTime, setMeetingTime] = useState([])

    const getExperience = () => {
        fetchGet('/option/experiences', {}).then(res => {
            setExperience(res.data)
        })
    }

    const getPosition = () => {
        fetchGet('/option/positions', {}).then(res => {
            setPosition(res.data)
        })
    }

    const getMeetingSystem = () => {
        fetchGet('/option/meeting-systems', {}).then(res => {
            setMeetingSystem(res.data)
        })
    }

    const getLocation = () => {
        fetchGet('/option/locations', {}).then(res => {
            setLocation(res.data)
        })
    }

    const getWeek = () => {
        fetchGet('/option/weeks', {}).then(res => {
            setWeek(res.data)
        })
    }

    const getMeetingTime = () => {
        fetchGet('/option/meeting-times', {}).then(res => {
            setMeetingTime(res.data)
        })

    }

    return {
        selected, setSelected,
        position, getPosition,
        location, getLocation,
        experience, getExperience,
        meetingSystem, getMeetingSystem,
        week, getWeek,
        meetingTime, getMeetingTime
    }
}