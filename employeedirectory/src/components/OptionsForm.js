import React from "react";

function OptionsForm(props) {
    return (
        <div>
            <h3>Filter Options</h3>
            <form>
                <label for="gender">Gender:</label>

                <select name="gender" id="gender">
                    <option value="none">No Filter</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label for="alphabetize">Alphabetical</label>

                <select name="gender" id="gender">
                    <option value="none">No Filter</option>
                    <option value="ascend">A-Z</option>
                    <option value="descend">Z-A</option>
                </select>

                <input type="submit" value ="submit">Submit</input>
            </form>


        </div>
    );
}

export default OptionsForm;