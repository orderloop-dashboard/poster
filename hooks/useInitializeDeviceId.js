import { setDeviceId } from "@/store/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const useInitializeDeviceId = () => {
    const dispatch = useDispatch();
    const deviceId = useSelector((state) => state.user.deviceId);

    useEffect(() => {
        if (!deviceId) {
            let localDeviceId = localStorage.getItem("deviceId");

            if (!localDeviceId) {
                localDeviceId = uuidv4();
                localStorage.setItem("deviceId", localDeviceId);
            }

            dispatch(setDeviceId(localDeviceId));
        }
    }, [deviceId, dispatch]);
};
