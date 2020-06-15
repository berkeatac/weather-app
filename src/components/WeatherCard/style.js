import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    borderColor: (selected) => (selected ? "#000000" : null),
  },
  pos: {
    marginBottom: 12,
  },
});

export default useStyles;
