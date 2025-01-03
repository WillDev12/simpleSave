const {readFileSync, writeFileSync, unlink} = require("fs")
const {join} = require("path")
const {generate} = require("short-uuid")

const saveData = function(dir, data, customID) {

    let id

    if (customID) id = customID
    else id = generate()

    const fp = join(process.cwd(), `/${dir}/${id}.json`)
    data = JSON.stringify(data)

    writeFileSync(fp, data)

    return id

}

const loadData = function(dir, id) {

    const fp = join(process.cwd(), `/${dir}/${id}.json`)

    try {
        var data = readFileSync(fp, "utf-8")
    } catch (err) {
        throw new Error(`No listing found with id ${id}`)
    }
    
    data = JSON.parse(data)

    return data

}

const updateData = function(dir, id, data) {

    const fp = join(process.cwd(), `/${dir}/${id}.json`)
    data = JSON.stringify(data)

    writeFileSync(fp, data)

}

const removeEntry = function(dir, id) {

    const fp = join(process.cwd(), `/${dir}/${id}.json`)

    unlink(fp, function(err) {
        if (err) throw err
    })

}

module.exports = {saveData,loadData,updateData,removeEntry}