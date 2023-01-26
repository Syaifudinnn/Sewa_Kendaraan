//inisialisasi library
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))

//sql connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sewa"
})

db.connect(error => {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("mysql connected");
    }
})

//<============================== PENYEWA ==============================>
//end point akses data sewa
app.get("/sewa", (req,res) => {

    let sql = "select * from penyewa"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error, message
            }
        }
        else {
            response = {
                count : result.length,
                penyewa : result
            }
        }
        res.json(response)
    })

})

//end point akses data penyewa berdasarkan id tertentu
app.get("/sewa/:id", (req,res) => {

    let data = {
        id_penyewa : req.params.id
    }

    let sql = "select * from penyewa where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                count : result.length,
                siswa : result
            }
        }
        res.json(response)
    })

})

//end point menyimpan data penyewa
app.post("/sewa", (req,res) => {
    
    let data = {
        nama_penyewa : req.body.nama_penyewa,
        alamat : req.body.alamat
    }

    let sql = "insert into penyewa set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })

})

//end point mengubah data penyewa
app.put("/sewa", (req,res) => {

    let data = [
        {
            nama_penyewa : req.body.nama_penyewa,
            alamat : req.body.alamat
        },

        {
            id_penyewa : req.body.id_penyewa
        }
    ]

    let sql = "update sewa set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })

})

//end point menghapus data penyewa berdasarkan id
app.delete("/sewa/:id", (req,res) => {
    let data = {
        id_penyewa : req.params.id
    }

    let sql = "delete from penyewa where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})

//<============================== KENDARAAN ==============================>
//end point akses data kendaraan
app.get("/kendaraan", (req,res) => {

    let sql = "select * from kendaraan"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error, message
            }
        }
        else {
            response = {
                count : result.length,
                kendaraan : result
            }
        }
        res.json(response)
    })

})

//end point akses data kendaraan berdasarkan id tertentu
app.get("/kendaraan/:id", (req,res) => {

    let data = {
        id_kendaraan : req.params.id
    }

    let sql = "select * from kendaraan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                count : result.length,
                kendaraan : result
            }
        }
        res.json(response)
    })

})

//end point menyimpan data kendaraan
app.post("/kendaraan", (req,res) => {
    
    let data = {
        nopol : req.body.nopol,
        nama_kendaraan : req.body.nama_kendaraan,
        kondisi : req.body.kondisi
    }

    let sql = "insert into kendaraan set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })

})

//end point mengubah data kendaraan
app.put("/kendaraan", (req,res) => {

    let data = [
        {
            nopol : req.body.nopol,
            nama_kendaraan : req.body.nama_kendaraan,
            kondisi : req.body.kondisi
        },

        {
            id_kendaraan : req.body.id_kendaraan
        }
    ]

    let sql = "update kendaraan set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })

})

//end point menghapus data kendaraan berdasarkan id
app.delete("/kendaraan/:id", (req,res) => {
    let data = {
        id_kendaraan : req.params.id
    }

    let sql = "delete from kendaraan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})

//<============================== ADMIN ==============================>
//end point akses data admin
app.get("/admin", (req,res) => {

    let sql = "select * from admin"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error, message
            }
        }
        else {
            response = {
                count : result.length,
                admin : result
            }
        }
        res.json(response)
    })

})

//end point akses data admin berdasarkan id tertentu
app.get("/admin/:id", (req,res) => {

    let data = {
        id_admin : req.params.id
    }

    let sql = "select * from admin where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                count : result.length,
                admin : result
            }
        }
        res.json(response)
    })

})

//end point menyimpan data admin
app.post("/admin", (req,res) => {
    
    let data = {
        nama_admin : req.body.nama_admin,
        status : req.body.status
    }

    let sql = "insert into admin set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })

})

//end point mengubah data admin
app.put("/admin", (req,res) => {

    let data = [
        {
            nama_admin : req.body.nama_admin,
            status : req.body.status
        },

        {
            id_admin : req.body.id_admin
        }
    ]

    let sql = "update admin set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })

})

//end point menghapus data admin berdasarkan id
app.delete("/admin/:id", (req,res) => {
    let data = {
        id_kendaraan : req.params.id
    }

    let sql = "delete from admin where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})




app.listen(3000, () => {
    console.log("alhamdulillah");
})