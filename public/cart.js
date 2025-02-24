

export default function cart() {

    let items = [] //장바구니 상품들

    function add (item) {
        //items에 추가
    }

    function getItems () {
        return [...items]
    }

    return {getItems, add}
}

