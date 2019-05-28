function listToMap (list) {
  if (list && list.length) {
    return list.reduce((total, item) => ({ ...total, [item._id]: item }), {} )
  } else {
    console.log('invalid list', list)
  }
}

export default listToMap
