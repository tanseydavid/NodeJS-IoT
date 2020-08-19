module.exports =  {
     getAppRootUrl(req) {
        return getAppRootUrl( req ) ;
    },
    hrefForCustomerNumber(req, customerNumber) {
        return getAppRootUrl(req) + "/customers/" +  customerNumber ;
    },
    hrefForProductCode(req, productCode) {
        return getAppRootUrl(req) + "/products/" + productCode;
    },
    hrefForOrderNumber(req, orderNumber) {
        return getAppRootUrl(req) + "/orders/" + orderNumber;
    },
    hrefForEmployeeNumber( req, employeeNumber ) {
        return getAppRootUrl(req) + "/employees/" + employeeNumber;
    },
    hrefForPayment( req, checkNumber, customerNumber ) {
        return getAppRootUrl(req) + '/payments/' + checkNumber + "/" + customerNumber;
    },
    hrefForOfficeCode( req, officeCode ) {
        return getAppRootUrl(req) + "/offices/" + officeCode;
    },
    formatCurrency( amount ) {
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      });
      return formatter.format( amount );
    }
}

function getAppRootUrl(req) {
    return req.protocol + '://' + req.get('host') ;
}

