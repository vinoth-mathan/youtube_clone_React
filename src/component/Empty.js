import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import styled from "@emotion/styled";



function Empty() {
  const Custom =styled(Button)({
    backgroundColor:"blue",
    color:"red",
    "&:hover":{
      backgroundColor:"red",
      color:"blue",
    }
})
const StyledThem = styled(Button)({
  // color:"orange",
  backgroundColor:'yellow',
  size:"2rem",
  display:"flex",
  placeContent:"center",
  width:'100%',
  padding:"10px",
  margin:"10px",
  "&:hover":{
    backgroundColor:"pink",
    color:"blue"
  }

})
  return (
    <Container>
     <Typography variant="h1" component="h6" align="" size="" >
             hello react
     </Typography>
{/* 
<Button variant="contained" color="primary">
Hello World
</Button>
<Button variant="outlined" color="error" size="large"> submit</Button>
<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
*/}
<StyledThem variant="contained" color="error" startIcon='<DelIcon />' endIcon="<SendIcon />" >red</StyledThem>
 < Custom size="large" variant="outlined" align="center" color="error">custom theam</Custom>
</Container>
   );
}

export default Empty;
