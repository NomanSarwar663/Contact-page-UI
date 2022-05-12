// mui
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
// mui icon
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";

export function CallCard({ data: callData }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        fontSize: "1rem",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Stack sx={{ display: "flex", mt: 2 }}>
      <Stack sx={{ display: "flex" }} direction="row" spacing={2}>
        <Stack>
          <Avatar {...stringAvatar(callData.name)} />
        </Stack>
        <Stack sx={{ flex: "1 0 auto", mr: 2 }}>
          <Typography component="div" variant="subtitle1">
            {callData.name}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            direction="row"
            spacing={1}
          >
            <PhoneCallbackOutlinedIcon
              sx={{ width: 14, height: 14, color: "#F44336" }}
            />
            <Typography variant="body2" color="text.secondary" component="div">
              {callData.phone}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pl: 4,
          }}
        >
          <Typography variant="body2" color="text.secondary" component="div">
            08:09 AM
          </Typography>
          <IconButton color="primary" aria-label="delete">
            <InfoOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 1 }} />
    </Stack>
  );
}

export default CallCard;
