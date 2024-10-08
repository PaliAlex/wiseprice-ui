import {Backdrop, CircularProgress} from "@mui/material";

interface ILoader {
    isLoading: boolean,
}

export const Loader = ({isLoading}: ILoader) => {
    return (
        <div>
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}