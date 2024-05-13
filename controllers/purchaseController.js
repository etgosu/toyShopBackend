const purchaseList = [];
const sessionUtil = {
  userId : '662bb0a35918958973cf5bb1'
}
exports.createPurchase = async (req, res) => {
  // const {prodCd, qty} = req.body;

  const newPurchase = {
    ...req.body,
    purchaseUserId : sessionUtil.userId, 
    createAt: new Date()
  }

  purchaseList.push(newPurchase);

  return res.status(201).send({ message : 'Purchase item successfully', purchaseList} );
}

exports.getPurchaseList = (req, res) => {
  return res.send(purchaseList);
}