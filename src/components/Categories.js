import { Tabs, Tab, Divider } from "@mui/material";

const Categories = ({ value, onChange, noOfTabs }) => {
  return (
    <>
      <Tabs value={value} onChange={onChange} aria-label="basic tabs example">
        {noOfTabs.map((el, i) => (
          <Tab key={i} label={el} />
        ))}
      </Tabs>
      <Divider sx={{ my: 4, margin: "-2px", borderBottomWidth: 2 }} />
    </>
  );
};

export default Categories;
