const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        height:200,
        margin:30,
        borderRadius: '0px 0px 60px 0px',
        '-webkit-box-shadow':'0 8px 4px #F40607',
        '-moz-box-shadow':'0 8px 4px #F40607',
        boxShadow : '0 8px 4px #F40607',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 260,
            height:260,
        },
        [theme.breakpoints.up('md')]: {
          maxWidth: 300,
          height:280,
      },
      },
      Azroot: {
        maxWidth: 200,
        height:200,
        margin:30,
        borderRadius: '0px 0px 60px 0px',
        '-webkit-box-shadow':'0 8px 4px #0067b2',
        '-moz-box-shadow':'0 8px 4px #0067b2',
        boxShadow : '0 8px 4px #0067b2',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 260,
            height:260,
        },
        [theme.breakpoints.up('md')]: {
          maxWidth: 300,
          height:280,
      },
      },
      media: {
        height: 200,
        [theme.breakpoints.up('sm')]: {
            height: 260,
        },
        [theme.breakpoints.up('md')]: {
          height: 300,
      },
      },
}));