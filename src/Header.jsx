import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Switch from "@mui/material/Switch"
import { FormControlLabel } from "@mui/material"

export function Header(props) {
    const { categories, selectedCategory, setSelectedCategory, setSorting } =
        props
    const categoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }
    const sortChange = (event) => {
        if (event.target.checked) {
            setSorting("desc")
        } else {
            setSorting("asc")
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Products
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch onChange={sortChange} color="warning" />
                        }
                        label="Sorting Descending"
                    />
                    <label htmlFor="vategories">
                        {" "}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            category:
                        </Typography>
                    </label>
                    <Select
                        name="categories"
                        id="categories"
                        value={selectedCategory}
                        onChange={categoryChange}
                        sx={{ color: "white" }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {categories.map((category) => {
                            return (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
