export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; 

export const value = (fc, sc) => {
return COLORS.indexOf(fc)*10 + COLORS.indexOf(sc);
};
