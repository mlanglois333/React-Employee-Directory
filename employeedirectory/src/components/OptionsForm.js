import React from "react";

function OptionsForm(props) {
    return (
        <div>
            <h3>Filter Options</h3>
            <br></br>
            <form onSubmit={props.handleSubmit}>
                <label> Gender:</label>

                <br></br>

                <select name="gender" id="gender"  onChange={props.handleInputChange}>
                    <option value="none">none</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br></br>

                <label>Alphabetical</label>
                <br></br>

                <select name="sort" id="sort" onChange={props.handleInputChange}>
                    <option value="none">none</option>
                    <option value="ascend">A-Z</option>
                    <option value="descend">Z-A</option>
                </select>
                <br></br>

                <button type="submit">Submit</button>
            </form>


        </div>
    );
}

export default OptionsForm;