var defangIPaddr = (address) => {
    return address.replaceAll(".", "[.]");
};