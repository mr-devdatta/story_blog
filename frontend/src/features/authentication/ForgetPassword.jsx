import { Button, Input } from "@mui/material";

export default function ForgetPassword() {
    return (
        <div>
            <div class="flex bg-blue-100 py-1 text-center">
                <div className="  border border-indigo-600"> Forget Password</div>
            </div>
            User name <Input variant="outlined" />
            <Button variant="contained">Login</Button>
        </div>
    );
}
