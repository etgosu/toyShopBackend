/**
 *  소스파일 명 : purchaseController.js 
 *  역할: 구매정보 관리(생성, 조회)
 */
// const Purchase = require('../models/Purchase'); 
const purchaseList = [];
const sessionUtil = {
  userId : '662bb0a35918958973cf5bb1'
}

exports.createPurchase = async (req, res) => {
  // const {prodCd, qty} = req.body;

  // Path Parameter 에서 prodId를 추출
  const {prodId} = req.params;
  const {qty} = req.body;
  const purchaseId = Array.isArray(purchaseList)? purchaseList.lenght + 1 : 0 ;
  
  // 구매요청 정보 생성
  const newPurchase = {
    purchaseId,  //구매정보 ID 
    prodId,      //제품ID
    qty,         //수량 
    purchaseUserId : sessionUtil.userId, //구매자(로그인한 사용자ID
    createdBy: sessionUtil.user,//구매정보 생성자(로그인한 사용자ID)
    createAt: new Date() //구매날짜
  }

  // 구매요청 정보를 메모리 DB에 저장
  await purchaseList.push(newPurchase);
  // 장바구니에서 구매 완료된 항목을 삭제
  const basketList = await Basket.deleteOne({userId: user._id, _id:basketId})
  
  // 구매요청이 정상 처리 되었음을 Client에게 상태 및 처리된 데이터를 제공
  return res.status(201).send({ message : 'Purchase item successfully', purchaseList} );
}

exports.getPurchaseList = (req, res) => {
  return res.send(purchaseList);
}