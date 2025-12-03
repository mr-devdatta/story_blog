import SubmitButton from "../../../components/form/Button/Button";
import DataContainer from "../../../components/layout/Container/DataContainer";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Label from "../../../components/form/Label/Label";
import TextField from "../../../components/form/Input/TextField";
import PasswordField from "../../../components/form/Input/PasswordField";
import Radio from "../../../components/form/Radio/Radio";
import DateField from "../../../components/form/Input/DateField";
import SelectBox from "../../../components/form/SelecBox/SelectBoc";
import CheckBox from "../../../components/form/CheckBox/CheckBox";
import { createEmployee } from "../api/employeeApi";

const cities = [
    { label: "New York", value: "newyork" },
    { label: "Los Angeles", value: "losangeles" },
    { label: "Chicago", value: "chicago" },
];

const countries = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "Peru", value: "peru" },
    { label: "Sri lanka", value: "srilanka" },
];

export default function EmployeeForm() {
    const [message, setMessage] = useState();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dateOfBirth: "",
        city: "",
        countryVisited: [],
    });

    const handleOnChange = (e, field) => {
        setFormData((prevState) => {
            return { ...prevState, [field]: e.target.value };
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const newHobbies = checked
                ? [...prevData.countryVisited, value] // add
                : prevData.countryVisited.filter((hobby) => hobby !== value); // remove
            return { ...prevData, countryVisited: newHobbies };
        });
    };

    const onSubmit = async () => {
        try {
            console.log("src\featuresemployeepagesEmployeeForm.jsx => ", formData);
            const response = await createEmployee(formData);
            setMessage(`Created employee with ID: ${response.id}`);
        } catch (error) {
            setMessage("Failed to create employee " + error);
        }
    };

    return (
        <>
            <DataContainer title="Add Employee">
                <div>{message}</div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Table padding="0" size="small" aria-label="simple table" sx={{ width: "70%" }}>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Full Name :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <TextField name="fullName" label="Full Name" value={formData.fullName} onChange={(e) => handleOnChange(e, "fullName")} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Email Address :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <TextField name="email" label="Email Address" value={formData.email} onChange={(e) => handleOnChange(e, "email")} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Password :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <PasswordField name="password" label="Password" value={formData.password} onChange={(e) => handleOnChange(e, "password")} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Confirm Password :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <PasswordField name="confirmPassword" label="Confirm Password" value={formData.confirmPassword} onChange={(e) => handleOnChange(e, "confirmPassword")} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Gender :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <div className="flex items-center space-x-6 text-left">
                                        <Radio label="Male" name="gender" value="male" isChecked={formData.gender === "male"} onChange={(e) => handleOnChange(e, "gender")} />
                                        <Radio label="Female" name="gender" value="female" isChecked={formData.gender === "female"} onChange={(e) => handleOnChange(e, "gender")} />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Date of Birth :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <DateField name="dateOfBirth" value={formData.dateOfBirth} onChange={(e) => handleOnChange(e, "dateOfBirth")} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="City :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <SelectBox name="city" label="Select City" value={formData.city} onChange={(e) => handleOnChange(e, "city")} options={cities} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align="right" sx={{ border: "none", width: "20%" }}>
                                    <Label text="Country Visited :" />
                                </TableCell>
                                <TableCell align="right" sx={{ border: "none" }}>
                                    <div className="flex items-center space-x-6 text-left">
                                        {countries.map((country) => (
                                            <CheckBox key={country.value} label={country.label} name="countryVisited" value={country.value} checked={formData.countryVisited.includes(country.value)} onChange={handleCheckboxChange} />
                                        ))}
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan={3} align="center" sx={{ border: "none" }}>
                                    <SubmitButton text="Submit" onClick={() => onSubmit()} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </DataContainer>
        </>
    );
}
