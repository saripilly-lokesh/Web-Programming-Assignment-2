<template>
    <div class="container">
        <h1>Employee Details</h1>
        <p>Read using axios get</p>
        <button class="btn btn-dark" @click="refresh">Refresh</button>
        <table class="table table-striped table-bordered p-2 mt-3">
            <thead class="table-dark">
                <tr>
                    <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in emplist" :key="emp.id">
                <td>{{ emp.name }}</td>
                <td>{{ emp.designation }}</td>
                <td>{{ emp.salary }}</td>
                <td>{{ emp.department }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'EmployeeList',
        data(){
            return{
                emplist:[]
            }
        },
        methods:{
            refresh(){
                this.fetchData()
            },
            fetchData(){
                axios.get('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee')
                .then((res)=>{this.emplist=res.data})
                .catch(err=>console.log(err));
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
    table{
        border-radius: 10px;
        overflow:hidden;
    }
</style>
