

export default function cart() {

    let items = [] //장바구니 상품들

    //메뉴 객체를 파라미터로 받아서 처리
    function add (menu) {

        const {mno,mname,price} = menu

        //만일 기존에 해당 mno에 해당하는 것이 있다면 수량만 변경

        const old = items.filter(item => item.mno === mno)

        if(old.length > 0){
            old[0].qty += 1
        }else {
            //없다면
            const cartItem = {mno:mno, mname:mname,price:price, qty: 1}
            items.push(cartItem)
        }



        return [...items]
    }

    function getItems () {
        return [...items]
    }

    return {getItems, add}
}

