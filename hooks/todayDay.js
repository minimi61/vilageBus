const date = new Date()

const dayKr = ['일', '월', '화', '수', '목', '금', '토']

export const todayDay = dayKr[date.getDay()]

export const nowTime = () => {
    const date = new Date();
    // console.log(date.getHours())
    return date
}