export default function ({ route, redirect }) {
    // kurumsal redirect
    if (route.fullPath === '/kurumsal') {
        return redirect('/kurumsal/hakkimizda')
    } else if (route.fullPath === '/en/kurumsal') {
        return redirect('/en/kurumsal/hakkimizda')
    }
}
