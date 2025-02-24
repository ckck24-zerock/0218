

export default function cart() {

    let items = [] //장바구니 상품들

    //메뉴 객체를 파라미터로 받아서 처리
    function add (menu) {

        const {mno,mname,price} = menu

        const cartItem = {mno:mno, mname:mname,price:price, qty: 1}

        items.push(cartItem)

        return [...items]
    }

    function getItems () {
        return [...items]
    }

    return {getItems, add}
}

