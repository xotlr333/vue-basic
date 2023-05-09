let address = '삼성동';
let country = ' of korea';


let fullAddress = address + country;
console.log(fullAddress);

address = '수색동';
console.log(fullAddress);

// 반응형을 구현하기 위해서 JS에서 제공하는 Proxy 객체 활용
const info = {
    address: '삼성동',
    country: ' of korea',
    fullAddress: '',
};

const handler = {};

const proxy = new Proxy(info, handler);
console.log(proxy);

console.log(proxy.address);

console.log(`fullAddress: ${proxy.fullAddress}`);

const handlerWithTrap = {
    // 'get' 트랩: target객체(info)가 가진 속성 값에 접근할 때 동작을 가로채는 역할
    get(target, property, receiver) {
        return '한국';
    },

    set(target, property, value, receiver) {
        if(property === 'address'){
            console.log('set 호출');
            target.address = value;
            target.fullAddress = value + target.country;
        }
    }
};

const proxy2 = new Proxy(info, handlerWithTrap);

// console.log(proxy2.address);

proxy2.address = '수색동';

console.log(info.fullAddress);
