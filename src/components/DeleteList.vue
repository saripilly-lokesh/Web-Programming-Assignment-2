<template>
    <div class="container">
        <h1>Delete Employee List</h1>
        <p>Deleting an employee using axios delete</p>
        <button class="btn btn-dark" @click="refresh">Refresh</button>
        <table class="table table-striped table-bordered my-2">
            <thead class="table-dark">
                <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="emp in emplist" :key="emp.id">
                <td>{{ emp.name }}</td>
                <td>{{ emp.designation }}</td>
                <td>{{ emp.salary }}</td>
                <td>{{ emp.department }}</td>
                <td><button @click="deleteEmp(emp.id)" class="btn btn-danger">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'DeleteList',
        data(){
            return{
                emplist:[]
            }
        },
        methods:{
            async fetchData(){
                try{
                    const resp = await axios.get('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee');
                    this.emplist = resp.data;
                    console.log(resp.data);
                }
                catch(err){
                    console.log(err);
                }
            },
            refresh(){
                this.fetchData();
            },
            async deleteEmp(id){
                console.log('Entered Delete method');
                if(!confirm('Are you sure you want to delete this record?')) return;
                try{
                    await axios.delete(`https://69e7502268208c1debe8a7bb.mockapi.io/api/employee/${id}`)
                    this.emplist = this.emplist.filter(item=> item.id!==id);
                }
                catch(err){
                    console.log('Delete error: ',err);
                }
            }
        },
        mounted(){
            this.fetchData();
        }
    }
</script>
<style scoped>
    .container{
        width:70%;
        margin:40px auto;
        text-align:center;
        font-family:Arial,sans-serif;
    }
    h1{
        margin-bottom:20px;
        color:#2c3e50;
    }
    table{
        border-radius: 10px;
        overflow:hidden;
    }
</style>