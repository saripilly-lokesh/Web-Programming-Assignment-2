<template>
    <div class="container" style="width:70%">
        <h1>Update Employee Details</h1>
        <p>Update using axios put</p>
        <button class="btn btn-dark" @click="refresh">Refresh</button>
        <table class="table table-striped table-bordered mt-2">
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
                <td><button class="btn btn-secondary" @click="setUpdate(emp)">Update</button></td>
            </tr>
            </tbody>
        </table>
    </div>
        <div class='container mt-2' v-if="edited.id!=null && edited.id!=''">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card p-3 mb-4">
                        <h2>Enter Updated Details</h2>
                        <div class="form">
                            <label for="nid">Updated Name:</label> <input id="nid" type="text" v-model="edited.name" class="form-control mb-1" placeholder="Enter updated name">
                            <label for="ndesignation">Updated Designation:</label> <input id="ndesignation" type="text" v-model="edited.designation" class="form-control mb-1" placeholder="Enter updated designation">
                            <label for="nsalary">Updated Salary:</label> <input id="nsalary" type="number" v-model.number="edited.salary" class="form-control mb-1" placeholder="Enter updated Salary">
                            <label for="ndepartment">Updated Department:</label> <input id="ndepartment" type="text" v-model="edited.department" class="form-control mb-1" placeholder="Enter updated department">
                            <br><button @click="update" class="btn btn-secondary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'UpdateList',
        data(){
            return{
                emplist:[],
                edited:{
                    id:null,
                    name:null,
                    designation:null,
                    salary:0,
                    department:null
                }
            }
        },
        methods:{
            async fetchData(){
                try{
                    const resp = await axios.get('https://69e7502268208c1debe8a7bb.mockapi.io/api/employee');
                    this.emplist=resp.data;
                    console.log(resp.data);
                }
                catch(err){
                    console.log(err);
                }
            },
            setUpdate(e){
                this.edited={
                    id:e.id,
                    name:e.name,
                    designation:e.designation,
                    salary:e.salary,
                    department:e.department
                }
            },
            refresh(){
                this.fetchData();
            },
            async update(){
                try{
                    if(this.edited.name==null || this.edited.designation==null || this.edited.salary==null || this.edited.department==null){
                    alert('Please fill all the fields');
                    return;
                    }
                    if(this.edited.salary<0){
                        alert('Salary should be a non negative number');
                        return;
                    }
                    console.log('Updating ID:',this.edited.id);

                    await axios.put(
                    `https://69e7502268208c1debe8a7bb.mockapi.io/api/employee/${this.edited.id}`,
                    this.edited
                    );
                    this.fetchData();
                    this.edited={
                        id:null,
                        name:null,
                        designation:null, 
                        salary:0,
                        department:null
                    }
                }
                catch(err){
                    console.log(err);
                }                   
            }
        },
        mounted(){
            this.fetchData();
        }
    }
</script>
<style scoped>
    h1{
        margin-bottom:20px;
        color:#2c3e50;
    }
    table{
        border-radius: 10px;
        overflow:hidden;
    }
</style>