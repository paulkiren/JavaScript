const main = async () => {
    console.log('Start')
    const names = ['Dan', 'Mitchell', 'Josh', 'Kiren']
    const data = await Promise.all(names.map(name => name + ' is cool'));
    console.log(data)
    console.log('End')
}

main();