import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

export function Header(props) {
    const { categories, selectedCategory, setSelectedCategory } = props

    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
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
                        onChange={handleChange}
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
