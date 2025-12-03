import { Button } from "@mui/material";

export default function SubmitButton(props) {
    const { text, onClick } = props;
    return (
        <div className="form-button-text">
            <Button
                //type={type}
                type="button"
                onClick={onClick}
                variant="contained"
                size="medium"
                sx={{
                    minWidth: "150px",
                    padding: "10px 30px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                }}
            >
                {text}
            </Button>
        </div>
    );
}
