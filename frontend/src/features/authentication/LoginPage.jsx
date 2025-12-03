import { Button, Input } from "@mui/material";
import React from "react";

export default function LoginPage() {
    return (
        <div className="" >
            <div class="flex bg-blue-100 py-1">
                <div className="  border border-indigo-600"> Please login</div>
            </div>
            <br />
            User name <Input variant="outlined" />
            <br />
            Password <Input variant="outlined" />
            <br />
            <br />
            <Button variant="contained">Login</Button>
        </div>
    );
}
